import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL = ``
const playListApi = {
  getPlayList(params: string) {
    return http.get<SuccessResponse<any>>(`/api/get/playlist/info?id=${params}`, {
    })
  },
  getDetailSongFromPlayList(params: string) {
    return http.get<SuccessResponse<any>>(`/api/get/song/info?id=${params}`, {
    })
  },
  getSongSound(params: string) {
    return http.get<SuccessResponse<any>>(`/api/get/song/sound?id=${params}`, {
    })
  },
}

export default playListApi
