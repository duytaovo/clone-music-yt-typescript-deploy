import React from "react"
import PauseIcon from '@mui/icons-material/Pause';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux";
import { changeIconPlay } from "src/store/slices/audio";
const PlayControl:React.FC<{auRef: HTMLAudioElement | null | undefined}> = ({ auRef }) => {

  const isPlay = useAppSelector((state) => state.audio.isPlay)
  const dispatch = useAppDispatch()
  const handlePlaySong = () => {
    if(isPlay === true) {
      dispatch(changeIconPlay( false ))
      if(auRef) {
        auRef.pause()
      }
    } else {
      dispatch(changeIconPlay( true ))
      if(auRef) {
        auRef.play()
      }
    }
  }

  return (
    <button
      className={"w-[42px] h-[42px] mx-2 my-0 "}
      title="Play Song"
      onClick={ handlePlaySong }
    >
      {
        isPlay
        ? <PauseIcon 
        sx={{
          // color:'white',
          width:"24px",
          height:"24px"
        }}
        />
        : <PlayCircleOutlineIcon
        sx={{
          // color:'white',
          width:"24px",
          height:"24px"
        }}
        />
      }
    </button>
  )
}

export default PlayControl