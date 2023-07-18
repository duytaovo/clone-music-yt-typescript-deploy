import React from "react"
import ShuffleIcon from '@mui/icons-material/Shuffle';
const ShuffleControl: React.FC = () => {
  return(
    <button className="mx-2 my-0 " title="Shuffle">
      <ShuffleIcon  sx={{
        // color:'white',
        width:"24px",
        height:"24px"
      }}/>
    </button>
  )
}

export default ShuffleControl