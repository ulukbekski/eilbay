import React from 'react'
import { useFavorites } from '@/hooks/useFavorites'
import { Container, Typography , Box } from '@mui/material'
import Image from 'next/image'

export default function Favorites() {
    const favorites = useFavorites()
    console.log(favorites)
  return (
    <Container>
        <Typography variant="body1" color="initial">Избранное</Typography>
        {favorites?.map((obj) => 
        <Box> <Image
                  className="object-cover"
                  src={obj.main_image}
                  alt={obj.name}
                  width={400}
                  height={500}
                ></Image>
                <Box>
                    <Typography variant="body1" color="initial">{obj.price}</Typography>
                    <Typography variant="body1" color="initial">{obj.sale_price}</Typography>
                    <Typography variant="body1" color="initial">{obj.description}</Typography>
                </Box>
                </Box>)}
    </Container>
  )
}


