import { List, Song } from 'src/types/types.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URLHome = '/api/get/home'
const URLCHART = '/api/get/charthome'

const songApi = {

  getSongs() {
    return http.get<SuccessResponse<List>>(URLHome, {
    })
  },
  getChart() {
    return http.get<SuccessResponse<any>>(URLCHART, {
    })
  },
}

export default songApi
