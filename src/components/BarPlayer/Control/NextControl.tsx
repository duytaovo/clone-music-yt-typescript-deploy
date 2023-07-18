import React from "react"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux";
import { changeIconPlay, setCurrnetIndexPlaylist, setSongId } from "src/store/slices/audio";
const NextControl: React.FC = () => {

  const currnetIndexPlaylist = useAppSelector((state) => state.audio.currnetIndexPlaylist)
  const playlistSong:any = useAppSelector((state) => state.audio.playlistSong)
  const dispatch = useAppDispatch()

  const handleNextSong = () => {
    if(playlistSong !== undefined && playlistSong.length > 0) {
      let currentIndex

      if(currnetIndexPlaylist === playlistSong.length - 1) {
        currentIndex = 0
      } else {
        currentIndex = currnetIndexPlaylist + 1
      }

      dispatch(setCurrnetIndexPlaylist(
        currentIndex
      ))

      dispatch(setSongId(
        playlistSong[currentIndex].encodeId
      ))

      dispatch(changeIconPlay(true))
    }
  }
  return (
    <button
      onClick={handleNextSong}
      className="mx-2 my-0 "
      title="Next Song"
    >
      <ArrowForwardIosIcon sx={{
        // color:'white',
        width:"24px",
        height:"24px"
      }}/>
    </button>
  )
}

export default NextControl