import Search from '@/components/Layout/Header/HeaderSearch'
import ProductList from '@/components/elements/home/ProductList'
import React from 'react'



export default function search() {
  return (
    <div>
      <Search sx={{m:"auto", maxWidth:"400px", display:{xs:"block",md:"none"}, border:"1px solid black",borderRadius:"8px", mt:2, color: 'black'}} />
      <ProductList />
    </div>
  )
}
