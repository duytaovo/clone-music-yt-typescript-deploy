import { CardContent, Grid, Typography } from '@mui/material'
import React from 'react'


interface PropsSong {
  encodeId?: string
  thumbnail?: string
  title?: string
  artistsNames?: string
}
const ItemSongHome = ({ song }: any) => {
  const renderListSong = (a: number, b: number) => {
    return (
      <Grid item xs={4} lg={4}>
        {song?.items.all?.slice(a, b)?.map(
          (song: PropsSong, index: number) => (
            (
              <div className='flex items-center justify-between flex-wrap w-max text-[#c3cada] ml-3.5 group hover:text-blue-500 cursor-pointer' key={index}>
                <img src={song.thumbnail} alt='' className='w-12 h-12 rounded object-contain group-hover:opacity-50'/>
                <CardContent>
                  <Typography variant='body2' color='' sx={{
                  }}>
                    {song.title}
                  </Typography>
                  <Typography variant='body2' color='' sx={{
                  }}>
                    {song.artistsNames}
                  </Typography>
                </CardContent>
              </div>
            )
          )
        )}
      </Grid>
    )
  }
  return (
    <div>
      <h4 className='text-[#fff]  font-sans font-semibold text-[28px] p-6 pl-3 line-clamp-1'>{song.title}</h4>
      <Grid container spacing={2} >
        <Grid item md={4}>
          {renderListSong(0, 4)}
        </Grid>
        <Grid item md={4}>
          {renderListSong(6, 10)}
        </Grid>
        <Grid item md={4}>
          {renderListSong(11, 15)}
        </Grid>
        
      </Grid>
    </div>
  )
}

export default ItemSongHome
