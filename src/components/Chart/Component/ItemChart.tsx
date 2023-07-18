import { Button, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import ItemSongHome from 'src/components/ItemSongHome/ItemSongHome'

export const ItemChart = ({ dataChart }: any) => {
  return (
    <div className='flex flex-col items-center'>
      <div>
        {dataChart?.items?.slice(0, 3)?.map((chart: any, index: number) => (
          <div
            className='group ml-3.5 flex w-max cursor-pointer flex-wrap justify-between text-[#c3cada] hover:text-blue-500'
            key={index}
          >
            <h4 className='p-6  pl-3 font-sans text-[28px] font-semibold text-[#4FE3C2] line-clamp-1 group-hover:text-blue-500 group-hover:opacity-50'>
              {index + 1}
            </h4>

            <img src={chart.thumbnail} alt='' className='h-12 w-12 rounded object-contain group-hover:opacity-50' />
            <CardContent>
              <Typography variant='body2' color='' sx={{}}>
                {chart.title}
              </Typography>
              <Typography variant='body2' color='' sx={{}}>
                {chart.artistsNames}
              </Typography>
            </CardContent>
          </div>
        ))}
      </div>
      <Button variant='contained' sx={{
        border:'solid 1px white',
        background:'none',
        mb:2

      }}>
        Xem thêm
      </Button>
    </div>
  )
}
