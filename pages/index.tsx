import React from 'react'
import HeroCarousel from '@/components/elements/home/HeroCarousel';
import LogoCardList from '@/components/elements/home/LogoCardList';
import Catalog from '@/components/elements/home/Catalog';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HeroCarousel/>
      <LogoCardList/>
      <Catalog/>
      
    </>
  )

}
