import axios, { AxiosError, type AxiosInstance } from 'axios'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { toast } from 'react-toastify'
import {
  clearLS,
  getAccessTokenFromLS,
  getRefreshTokenFromLS,
  setAccessTokenToLS,
  setRefreshTokenToLS
} from './auth'
import { isAxiosExpiredTokenError, isAxiosUnauthorizedError } from './utils'
import { ErrorResponse } from 'src/types/utils.type'
import { DOMAIN } from 'src/constants/config'


export class Http {
  instance: AxiosInstance
  private accessToken: string
  private refreshToken: string
  private refreshTokenRequest: Promise<string> | null
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.refreshToken = getRefreshTokenFromLS()
    this.refreshTokenRequest = null
    this.instance = axios.create({
      baseURL: DOMAIN,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'expire-access-token': 60 * 60 * 24, // 1 ngày
        'expire-refresh-token': 60 * 60 * 24 * 160 // 160 ngày
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    // Add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        // if (url === URL_LOGIN || url === URL_REGISTER) {
        //   const data = response.data as AuthResponse
        //   this.accessToken = data.data.access_token
        //   this.refreshToken = data.data.refresh_token
        //   setAccessTokenToLS(this.accessToken)
        //   setRefreshTokenToLS(this.refreshToken)
        //   setProfileToLS(data.data.user)
        // } else if (url === URL_LOGOUT) {
        //   this.accessToken = ''
        //   this.refreshToken = ''
        //   clearLS()
        // }
        return response
      },
      (error: AxiosError) => {
        // Chỉ toast lỗi không phải 422 và 401
        if (
          ![HttpStatusCode.UnprocessableEntity, HttpStatusCode.Unauthorized].includes(error.response?.status as number)
        ) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const message = data?.message || error.message
          toast.error(message)
        }

        // Lỗi Unauthorized (401) có rất nhiều trường hợp
        // - Token không đúng
        // - Không truyền token
        // - Token hết hạn*

        // Nếu là lỗi 401
        if (isAxiosUnauthorizedError<ErrorResponse<{ name: string; message: string }>>(error)) {
          const config = error.response?.config || {}
          const { url } = config
          // Trường hợp Token hết hạn và request đó không phải là của request refresh token
          // thì chúng ta mới tiến hành gọi refresh token
          
          // Còn những trường hợp như token không đúng
          // không truyền token,
          // token hết hạn nhưng gọi refresh token bị fail
          // thì tiến hành xóa local storage và toast message

          clearLS()
          this.accessToken = ''
          this.refreshToken = ''
          toast.error(error.response?.data.data?.message || error.response?.data.message)
          // window.location.reload()
        }
        return Promise.reject(error)
      }
    )
  }

}
const http = new Http().instance
export default http
