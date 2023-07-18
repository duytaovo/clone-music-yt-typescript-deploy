import React from 'react'
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom'

interface Props {
  children: React.ReactNode
  to:string,
  props?:any,
}


const CustomLink = ({ children, to, ...props } : Props) => {
  const navigate = useNavigate()

  return (
    <li
      className={`list-none hover:text-gray-800 active:text-red-600`}
      style={{ cursor: 'pointer' }}
      onClick={() => {
        navigate(to)
      }}
    >
      <Link className='' to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default CustomLink
