import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
interface Props {
  song: any
  img: any
}
export default function MediaControlCardComponent({ song, img }: Props) {
  const theme = useTheme()
  return (
    <div
      className='
    '
    >
      <Card sx={{ display: 'flex', cursor: 'pointer' }}>
        <CardMedia
          component='img'
          sx={{
            height: '200px',
            objectFit: 'revert',
            borderColor: '#DEDEDE',
            display: 'inline-block',
            pd: 0,
            cursor: 'pointer',
            position: 'relative',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
            // zIndex:100,
            '&:hover': {
              display: 'block',
              backgroundColor: 'DEDEDE',
              opacity: [0.9, 0.8, 0.7]
            }
          }}
          image={song.banner || song.thumbnail}
          alt='Live from space album cover'
        ></CardMedia>
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
    </div>
  )
}
