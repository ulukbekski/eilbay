import React from 'react'
import HeroCarousel from '@/components/elements/home/HeroCarousel';
import LogoCardList from '@/components/elements/home/LogoCardList';
import Catalog from '@/components/elements/home/Catalog';
import EilbayFilials from '@/components/elements/home/EilbayFilials';
import axios from 'axios';

export default function Home() {

  React.useEffect(() => {
    const func = async () => {
      const res =  await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(res.data)
    }
    func();
  })
  return (
    <>
      <HeroCarousel/>
      <LogoCardList/>
      <Catalog/>
      <EilbayFilials/>
    </>
  )

}
