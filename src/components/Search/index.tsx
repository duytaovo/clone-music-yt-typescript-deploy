import React from 'react'
import { IconButton } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

interface Props {
  placeholder:string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  width?:string
}

const Search = ({ placeholder, onChange, width } : Props) => {
  return (
    <div
      style={{ width: width }}
      className='flex h-8 content-center items-center justify-between rounded-full bg-white'
    >
      <IconButton>
        <SearchOutlinedIcon
          sx={{
            fontSize: '20px',
            alignItems: 'center',
            marginTop: '3px'
          }}
        />
      </IconButton>
      <input
        className='mr-5 text-base placeholder:text-xs focus:outline-none'
        type='search'
        placeholder={`${placeholder}...`}
        onChange={onChange}
      />
    </div>
  )
}

export default Search
