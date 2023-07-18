import React from "react"
import Slider from "../Slider"
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux"
import { setVolume } from "src/store/slices/audio"

const VolumeSliderControl: React.FC<{auRef: HTMLAudioElement | null | undefined}> = ({ auRef }) => {

  const volume:number | null = useAppSelector((state) => state.audio.volume)
  const dispath = useAppDispatch()

  return(
    <div>
      <Slider
        setWidth={"84px"}
        setHeight={"4px"}
        percentSlider={Number(volume) * 100}
        toogleTooltip={false}
        getPercentSlider={(value: number) => {
          if(auRef) {
            localStorage.setItem("volume", String(value / 100))
            dispath(setVolume(
              value / 100
            ))
            auRef.volume = value / 100
          }
        }}
      />

    </div>
  )
}

export default VolumeSliderControl