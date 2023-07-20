import React from 'react'
import Image from 'next/image'
import { Container,Button, Typography,IconButton} from '@mui/material'
import logo from '@/assets/butterfly.svg';
import Search from '../UI/HeaderSearch'
import { HiOutlineHeart } from 'react-icons/hi';
import { BiChat } from 'react-icons/bi'
import {FaRegUser} from 'react-icons/fa';
import LanguageSelect from '../UI/LanguageSelect';
import { useFavorites } from '@/hooks/useFavorites';
import MenuIconButton from '../UI/MenuIconButton';


interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void; 
}



function Header({isOpen, toggleSidebar}:SidebarProps) {

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };
  const favorites  = useFavorites()
  
  return (
    <header className='bg-default h-[100px] flex items-center '>
      <Container sx={{display:'flex',alignItems:"center",justifyContent:"space-around",p:{xs:0,sm:1}, width:"100%",gap:1}}>
        <MenuIconButton isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        {/* <SideBarToggleButton/> */}
        <Button href='/' sx={{flexShrink:0,}}>
          <Image
            src={logo}
            width={42}
            className='w-[30px] md:w-[42px] '
            alt="logo img " />
          <Typography 
            variant='h4' 
            sx={{textTransform:'none', color:'white',fontSize:{ xs: 24, md: 30, lg: 36, xl: 40 }}}
            >
              Eilibay
          </Typography>

        </Button>
        <Search onSearch={handleSearch}  />
        <LanguageSelect/>
        
        <nav className='gap-[4px] flex p-2'  >
          <Button sx={{ color:'white',p:0, display:{xs:"none",md:'block'}}}>
            <HiOutlineHeart className='text-xl m-auto'/>
            {/* {favorites.length} */}
            <Typography sx={{fontSize:"14px",textTransform:'none'}}>Избранное</Typography>
          </Button>
          <Button sx={{display:"block",p:0, color:'white'}}>
            <BiChat className='text-4xl md:text-xl m-auto'/>
            <Typography  sx={{fontSize:"14px",textTransform:'none',display:{xs:"none",md:'block'}}}>Чат</Typography>
          </Button>
          <Button sx={{display:{xs:"none",md:'block'},p:0, color:'white'}} href={true? "/user/profile/id": "/user/login"}>
            <FaRegUser className='text-xl m-auto'/>
            <Typography sx={{fontSize:"14px",textTransform:'none'}}>Профиль</Typography>
          </Button>
        </nav>
      </Container>
    </header>
  )
}

export default Header
