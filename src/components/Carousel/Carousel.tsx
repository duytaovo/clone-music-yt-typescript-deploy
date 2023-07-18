import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import NextArrow from '../NextArrow'
import PrevArrow from '../PreArrow/PreArrow'
import getBreakpoint from 'src/utils/getBreakpoint'
import { Item, List } from 'src/types/types.type'
import MediaControlCard from '../Card'
import { Key } from 'react'

interface Item2 {
  img: any,
  numberItem:number
}

export default function Carousel({
  song,
  img,
  numberItem
}: Item & Item2) {
  const settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 5,
    autoplay:true,
   //  fade:true,
    autoplaySpeed:4000,
    nextArrow: <NextArrow numberItem={4} currentSlide={song?.items.length}/>,
    prevArrow: <PrevArrow />,
   //  responsive: [
   //    {
   //      breakpoint: 640,
   //      settings: {
   //        slidesToShow: 1,
   //        slidesToScroll: 1
   //      }
   //    },
   //    {
   //      breakpoint: 1289,
   //      settings: {
   //        slidesToShow: 2,
   //        slidesToScroll: 2
   //      }
   //    },
   //    {
   //      breakpoint: 1920,
   //      settings: {
   //        slidesToShow: 3,
   //        slidesToScroll: 3
   //      }
   //    }
   //  ]
  }
  
  return (
    <div className='mt-3'>
      <h4 className='text-[#fff]  font-sans font-semibold text-[28px] p-6 pl-3 line-clamp-1'>{song.title}</h4>
      <Slider {...settings}>
        {song?.items?.map((_song: { src: Key | null | any }, index: number) => (
          <div
            key={index}
            className='
                     h-36 w-full
                  px-3 sm:h-36
                  sm:w-full md:h-36
                  md:w-1/2 xl:h-36
                  xl:w-1/3 2xl:h-36
                  2xl:w-1/3 
                  '
          >
            {' '}
            <MediaControlCard img={img} song={_song} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
