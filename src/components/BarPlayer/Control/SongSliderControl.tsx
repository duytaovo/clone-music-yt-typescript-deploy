import React from "react"
import { useAppSelector } from "src/hooks/useRedux"
import Slider from "../Slider"


const SongSliderControl: React.FC<{auRef: HTMLAudioElement | null | undefined}>  = ({ auRef }) => {

  const currentTime = useAppSelector((state) => state.audio.currentTime)
  const duration = useAppSelector((state) => state.audio.duration)
  return(
    <div>
      <Slider
        setWidth={"100%"}
        setHeight={"2px"}
        percentSlider={(currentTime/duration)*100}
        toogleTooltip={true}
        currentTimeSongTooltip={currentTime}
        getPercentSlider={(value: number) => {
          if(auRef) {
            auRef.currentTime = (value / 100) * auRef.duration
          }
        }}
      />
    </div>
  )
}

export default SongSliderControl