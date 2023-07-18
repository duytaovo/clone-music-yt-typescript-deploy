import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const lyricApi = {
  getLyric(params: string) {
    return http.get<SuccessResponse<any>>(`/api/get/song/lyric?id=${params}`, {
    })
  },
}

export default lyricApi
