import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'src/hooks/useRedux'
import img from '../imgzing.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { IconButton, Tooltip } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

const TrackInfo: React.FC = () => {
  // const info = useAppSelector((state) => state.audio.infoSongPlayer)
  const songDetail = useAppSelector((state) => state.audio.songDetail)

  let [like, setLike] = useState(Number(localStorage.getItem('like')))
  const handleClickLike = () => {
    if ((like === 0)) {
      setLike(1)
      localStorage.setItem('like', '1')
    } else {
      setLike(0)
      localStorage.setItem('like', '0')
    }
  }
  return (
    <div className='flex items-center'>
      {/* Thumbnail */}
      <img src={songDetail.thumbnail || img} alt={songDetail.title} className='h-[46px] rounded-[5px]' />
      {/* End Thumbnail */}

      {/* Info */}
      <div className='ml-3 flex h-[46px] mr-2 flex-col justify-center'>
        <div className='mb-1 cursor-default truncate text-base font-semibold text-[color:var(--color-text)] opacity-90'>
          {songDetail.title || 'Chọn bài hát'}
        </div>
        <div className='flex text-xs text-[color:var(--color-text)] opacity-60'>
          {songDetail.artists &&
            songDetail.artists.map((e: any, i: number) => {
              return (
                <span key={i}>
                  {i > 0 ? <span>, </span> : ''}
                  <Link className='hover:underline' to={``}>
                    {e.name}
                  </Link>
                </span>
              )
            })}
        </div>
      </div>
      {/* End Info */}
      <Tooltip title='Like'>
        <IconButton
          style={{
            borderRadius: '4px'
          }}
          aria-label='like'
          className='buttonMark__wrapper'
          onClick={handleClickLike}
        >
          {like === 0 ? (
            <FavoriteBorderIcon fontSize='small' className='buttonMark__isChecking' style={{ fontSize: '24px',color:"white" }} />
          ) : (
            <FavoriteIcon fontSize='small' className='buttonMark__isChecking' style={{ fontSize: '24px',color:"white" }} />
          )}
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default TrackInfo
