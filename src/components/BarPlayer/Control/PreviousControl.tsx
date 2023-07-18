import React from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux";
import { changeIconPlay, setCurrnetIndexPlaylist, setSongId } from "src/store/slices/audio";
const PreviousControl = () => {

  const currnetIndexPlaylist = useAppSelector((state) => state.audio.currnetIndexPlaylist)
  const playlistSong:any = useAppSelector((state) => state.audio.playlistSong)

  const dispatch = useAppDispatch()

  const handlePreSong = () => {
    if(playlistSong !== undefined && playlistSong.length > 0) {
      let currentIndex
      if(currnetIndexPlaylist === 0) {
        currentIndex = 0
      } else {
        currentIndex = currnetIndexPlaylist - 1
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
      onClick={handlePreSong}
      className="mx-2 my-0 " title="Previous Song"
    >
      <ArrowBackIosIcon  sx={{
        // color:'white',
        width:"24px",
        height:"24px"
      }}/>
    </button>
  )
}

export default PreviousControl