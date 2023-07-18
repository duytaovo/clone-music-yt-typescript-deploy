import { useEffect, useState } from "react"
import { useAppDispatch } from "./useRedux"
import { getLyric } from "src/store/slices/song"
import { unwrapResult } from "@reduxjs/toolkit"
import { setOpenLyric } from "src/store/slices/audio"

const useLyric = ( songId:string | null): any => {

  const [lyr, setLyr] = useState<Array<{ data: string }>>()
  const dispatch = useAppDispatch()

  useEffect(() => {
    (
      async () => {
        if(songId !== null && songId !== "") {

          let dataLyric:any = await dispatch(getLyric(songId)).then(unwrapResult)
          dataLyric = dataLyric?.data.data.data
          let customLyr:{ startTime: number, endTime: number,data: string }[] = []

          dataLyric.sentences &&
          dataLyric.sentences.forEach((e:{words: []}, i:number) => {
            let lineLyric:string = ""
            let sTime: number = 0
            let eTime: number = 0

            e.words.forEach((element: {data: string, startTime: number, endTime: number}, index:number) => {
              if(index === 0) {
                sTime = element.startTime
              }
              if(index === e.words.length - 1) {
                eTime = element.endTime
              }
              lineLyric = lineLyric + element.data + " "
            })
            customLyr.push({
              startTime: sTime,
              endTime: eTime,
              data: lineLyric
            })
          })

          setLyr(customLyr)

        }
      }
    )()
  }, [songId])

  return lyr

}

export default useLyric
