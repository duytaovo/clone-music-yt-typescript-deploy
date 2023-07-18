import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ShareIcon from '@mui/icons-material/Share'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import img from './imgzing.jpg'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import { useState } from 'react'

const VideoPlayer = ({ playListData, songThumbnail }: { playListData: any; songThumbnail: any }) => {
  const today = new Date()
  const time = today.getDate() + ':' + (today.getMonth() + 1) + ':' + today.getFullYear()

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

  console.log(like)
  return (
    <div>
      {playListData !== undefined && (
        <Card variant='outlined' sx={{ maxWidth: 350, ml: 3, mt: 2, backgroundColor: 'transparent' }}>
          <div className='relative inline-block'>
            <img src={songThumbnail?.thumbnailM || img} className='relative w-80 cursor-pointer' alt='' />
            <div className=''>
              <IconButton
                aria-label='play/pause'
                sx={{
                  position: 'absolute',
                  margin: 'auto',
                  color: 'white',
                  transform: 'translate(-50%, -50%)',
                  top: '50%',
                  left: '50%',
                  '&:hover': {
                    backgroundColor: 'Black',
                    opacity: [0.9, 0.8, 0.7],
                    color: 'white'
                  }
                }}
              >
                <PlayCircleFilledIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
            </div>
          </div>
          <CardContent>
            <Typography
              variant='h5'
              color='white'
              sx={
                {
                  // color:"#c3cada"
                }
              }
            >
              {playListData?.data?.data?.data?.title}
            </Typography>
            <Typography
              variant='body2'
              color='white'
              sx={{
                color: '#c3cada'
              }}
            >
              Cập nhật ngày {time}
            </Typography>
          </CardContent>
          <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <IconButton
                aria-label='add to favorites'
                sx={{
                  color: 'white',

                  '&:hover': {
                    opacity: [0.9, 0.8, 0.7],
                    color: 'white'
                  }
                }}
                onClick={handleClickLike}
              >
                {like === 0 ? (
                  <FavoriteBorderIcon
                    fontSize='small'
                    className='buttonMark__isChecking'
                    style={{ fontSize: '24px', color: 'white' }}
                  />
                ) : (
                  <FavoriteIcon
                    fontSize='small'
                    className='buttonMark__isChecking'
                    style={{ fontSize: '24px', color: 'white' }}
                  />
                )}
              </IconButton>
              <IconButton
                aria-label='share'
                sx={{
                  color: 'white',
                  '&:hover': {
                    opacity: [0.9, 0.8, 0.7],
                    color: 'white'
                  }
                }}
              >
                <ShareIcon sx={{ color: '#c3cada' }} />
              </IconButton>
            </div>
            <IconButton
              aria-label='share'
              sx={{
                color: 'white',
                '&:hover': {
                  opacity: [0.9, 0.8, 0.7],
                  color: 'white'
                },
                right: 0
              }}
            >
              <ExpandMoreIcon sx={{ color: '#c3cada', fontSize: '30px' }} />
            </IconButton>
          </CardActions>
        </Card>
      )}
    </div>
  )
}

export default VideoPlayer
