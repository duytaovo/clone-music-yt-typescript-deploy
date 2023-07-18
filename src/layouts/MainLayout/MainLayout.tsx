import { memo, useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import './styles.css'
import BarPlayer from 'src/components/BarPlayer'
import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { RootState } from 'src/store/store'
import { getPlayList, getSongDetail, getSongSound } from 'src/store/slices/playlist'
import { changeIconPlay, setPlaylistSong, setSongId } from 'src/store/slices/audio'
import { unwrapResult } from '@reduxjs/toolkit'
interface Props {
  children?: React.ReactNode
}
function MainLayoutInner({ children }: Props) {
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
    <div className='h-100vh w-[100vw] bg'>
        <Header />
      {children}
      <Outlet />
      <BarPlayer  songDetail={songDetail}/>
      {/* <Footer /> */}
    </div>
  )
}
const MainLayout = memo(MainLayoutInner)
export default MainLayout
