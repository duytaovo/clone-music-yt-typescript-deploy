import { Grid } from '@mui/material'
import ItemSongPlayer from 'src/components/ItemSongPlayer'
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import AlbumIcon from '@mui/icons-material/Album';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { useAppSelector } from 'src/hooks/useRedux';
interface Props {
  onClick: (value: string) => void;
  playListData:any
}
export const ListPlayer = ({playListData,onClick}:Props) => {
  const indexCardActive = useAppSelector((state) => state.audio.indexCardActive)
  return (
    <div className="h-[70vh] overflow-y-auto scrollbar-thumb-rounded">
      <div className='flex items-center justify-between text-white'>
        <Grid container spacing={2} sx={{mb:2,ml:""}}>
          <Grid item xs={5.5} sx={{display:"flex", alignItems:"center"}}>
            <QueueMusicIcon/>
            <p className=" text-[#8C8891] ml-2">BÀI HÁT</p>
          </Grid>
          <Grid item xs={4.5} sx={{display:"flex", alignItems:"center"}}>
            <AlbumIcon/>
            <p className="text-[#8C8891] ml-2">ALBUM</p>
          </Grid>
          <Grid item xs={2} sx={{display:"flex", alignItems:"center"}}>
            <AccessTimeFilledIcon/>
            <p className="text-[#8C8891] ml-2">THỜI GIAN</p>
          </Grid>
        </Grid>
      </div>
      <div>
      {playListData?.data?.data?.data?.song?.items?.map((_song: any , index: number) => (
          <div
            key={_song.encodeId}
          >
            <ItemSongPlayer index={index} active={indexCardActive} bg="hover:bg-[#302639] rounded ml-1 pb-[1px]" onClick={onClick} songDetail={_song}/>
          </div>
        ))}
      </div>
    </div>
  )
}
