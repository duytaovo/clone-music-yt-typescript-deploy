import React from "react"
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux";
import { changeIconVolume, setVolume } from "src/store/slices/audio";
const VolumeControl: React.FC<{auRef: HTMLAudioElement | null}> = ({auRef}) => {

  const isMute = useAppSelector((state) => state.audio.isMute)
  // const volume = useAppSelector((state) => state.audio.volume)
  const dispatch = useAppDispatch()

  const handleMuteVolume = () => {
    if(isMute) {
      dispatch(changeIconVolume(false))
      dispatch(setVolume(
        Number(localStorage.getItem("volume"))
      ))
      if(auRef) {
        auRef.volume = Number(localStorage.getItem("volume"))
      }
    } else {
      dispatch(changeIconVolume(true))
      dispatch(setVolume(0))
      if(auRef) {
        auRef.volume = 0
      }
    }
  }
  return (
    <div
      onClick={handleMuteVolume}
    >
      {
        isMute
        ?
          <button className="mx-2 my-0" title="Mute">
            <VolumeMuteIcon 
            sx={{
              // color:'white',
              width:"24px",
              height:"24px"
            }}
            
            />
          </button>
        :
          <button className="mx-2 my-0" title="Mute">
            <VolumeUpIcon 
            sx={{
              // color:'white',
              width:"24px",
              height:"24px"
            }}
            />
          </button>
      }
    </div>
  )
}

export default VolumeControl