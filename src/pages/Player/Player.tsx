import React, { useEffect} from 'react'
import { Grid } from '@mui/material'
import { ListPlayer } from './component/ListPlayer'
import VideoPlayer from 'src/components/VideoPlayer'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { getPlayList } from 'src/store/slices/playlist'
import { changeIconPlay, setPlaylistSong, setSongId } from 'src/store/slices/audio'

const Player = () => {
  const { playlist } = useSelector((state: RootState) => state.playlist)
  const dispatch = useAppDispatch()
  const songDetail = useAppSelector((state) => state.audio.songDetail)

  const { id } = useParams();
  
  useEffect(() => {
    dispatch(getPlayList(id))
  }, [])

  useEffect(() => {
    (
      async () => {
          dispatch(setPlaylistSong(playlist?.data?.data?.data?.song?.items))
      }
    )()
  }, [playlist, dispatch])

  const onClick = (value:string) =>{
    dispatch(setSongId(
      value
    ))
    dispatch(changeIconPlay( true ))
  }
  return (
    
    <div className='h-screen w-[100vw]'>
      <Grid container spacing={2}>
        <Grid item xs={4} sx={{
          ml:2,
        }}>
         {<VideoPlayer playListData={playlist} songThumbnail={songDetail}/>}
        </Grid>
        <Grid item xs={7.5}>
         {<ListPlayer playListData={playlist} onClick={onClick}/>}
        </Grid>
      </Grid>
        {/* <BarPlayer songDetail={songDetail}/> */}
    </div>
  )
}

export default Player
