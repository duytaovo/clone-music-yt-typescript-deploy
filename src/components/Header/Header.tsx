import { IconButton } from '@mui/material'
import CustomLink from '../CustomLink'
import Search from '../Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useEffect, useState } from 'react'
import LanguageIcon from '@mui/icons-material/Language'
import { useTranslation } from 'react-i18next'
import { locales } from 'src/i18n/i18n'
import Popover from '@mui/material/Popover'

import './styles.css'

export default function Header() {
  const { i18n } = useTranslation()
  const { t } = useTranslation('home')
  const currentLanguage = locales[i18n.language as keyof typeof locales]
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  const sidebarLink = [
    {
      list_top: [
        {
          tiltle: 'home',
          id: 1,
          to: '/'
        },
        {
          tiltle: 'discover',
          id: 2,
          to: '/explore'
        },
        {
          tiltle: 'library',
          id: 3,
          to: '/library'
        },
        {
          tiltle: 'upgrade',
          id: 4,
          to: '/'
        }
      ]
    }
  ]

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset

      if (scrollTop > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const renderListLink = () => {
    return sidebarLink[0].list_top.map((item) => {
      return (
        <CustomLink to={item.to} key={item.id}>
          <div className='inline-block px-5 text-[#c3cada]'>
            <span className='animate-spin hover:text-blue-500'>{t('header.home')}</span>
          </div>
        </CustomLink>
      )
    })
  }

  const changeLanguage = (lng: 'en' | 'vi') => {
    i18n.changeLanguage(lng)
  }
  const onChange = () =>{}
  return (
    <header
      className={`fixed top-0 z-10 box-border flex h-16 w-full items-center justify-between p-4 ${
        isScrolled ? 'scrolled' : ''
      }`}
    >
      <div>
        <img src='https://music.youtube.com/img/on_platform_logo_dark.svg' alt=''></img>
      </div>
      <ul className='item-center flex justify-between'>{renderListLink()}</ul>
      <Search placeholder='Tìm kiếm' onChange={onChange} />
      <div className="flex">
        <IconButton sx={{ color: 'white',
        '&:hover': {
          opacity: [0.9, 0.8, 0.7],
          color: 'white'
        }
      }}>
          <AccountCircleIcon />
        </IconButton>
        <div >
          <IconButton sx={{ color: 'white','&:hover': {
          opacity: [0.9, 0.8, 0.7],
          color: 'white'
        } }} onClick={handleClick}>
            <LanguageIcon />
          </IconButton>
          <span className='mx-1 text-white'>{currentLanguage}</span>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <div className='relative rounded-sm border border-gray-200 mr-5 bg-white shadow-md'>
            <div className='flex flex-col py-2 pr-2 pl-3'>
              <button className='py-2 px-3 text-left hover:text-blue-500' onClick={() => changeLanguage('vi')}>
                Tiếng Việt
              </button>
              <button className='mt-2 py-2 px-3 text-left hover:text-blue-500' onClick={() => changeLanguage('en')}>
                English
              </button>
            </div>
          </div>
          </Popover>
        </div>
      </div>
    </header>
  )
}
