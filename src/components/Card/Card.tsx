import { makeStyles, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { StyleHTMLAttributes, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { useAppDispatch } from 'src/hooks/useRedux'
import { getPlayList } from 'src/store/slices/playlist'

interface Props {
  song: any
  img: any
}

export default function MediaControlCard({ song }: Props) {
  const navigate = useNavigate()

  return (
    <div>
      <Card
        sx={{ display: 'flex', cursor: 'pointer' }}
        onClick={() => {
          navigate(`/player/${song.encodeId}`)
        }}
      >
        <div className='relative inline-block'>
          <img src={song.banner || song.thumbnail} className='relative cursor-pointer ' alt='' />
          <IconButton
            aria-label='play/pause'
            sx={{
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              margin: 'auto',
              top: '50%',
              left: '50%',
              color: 'white',
              '&:hover': {
                backgroundColor: 'Black',
                opacity: [0.9, 0.8, 0.7],
                color: 'white'
              }
            }}
          >
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
        </div>
        <IconButton
          sx={{
            display: 'none',
            position: 'absolute',
            top: '5px',
            margin: 'auto',
            color: 'white',
            '&:hover': {
              backgroundColor: 'Black',
              opacity: [0.9, 0.8, 0.7],
              color: 'white'
            }
          }}
        >
          <MoreVertIcon />
        </IconButton>
      </Card>
      <div className='flex items-center '>
        <Typography variant='subtitle1' color='white' component='div'>
          {song.title} | {song.artistsNames}
        </Typography>
      </div>
    </div>
  )
}
