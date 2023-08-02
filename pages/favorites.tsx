import React from "react";
import { useFavorites } from "@/hooks/useFavorites";
import { Container, Typography, Box } from "@mui/material";
import Image from "next/image";

export default function Favorites() {
  const favorites = useFavorites();
  console.log(favorites);
  return (
    <Container >
      <Typography variant="body1" color="initial" px={4}>
        Избранное
      </Typography>
      {favorites?.map((obj) => (
        <Box display="flex" px={4} py={2} gap="20px" mb={'22px'} sx={{border:"1px solid #e1e1e1"}}>
         
          <Image
            className="object-cover rounded-[7px] min-w-[260px] min-h-[300px]"
            src={obj.main_image}
            alt={obj.name}
            width={260}
            height={300}
          ></Image>
          <Box>
            <Box display="flex" alignItems={'center'}>
              <Typography variant="body1" fontSize={28} fontWeight={600} color="initial">
                {obj.price} <u>C</u> 
              </Typography>
              <Typography variant="body1" fontSize="18px" className="text-[#909090]">
                {obj.sale_price}
              </Typography> 
            </Box>
            <Typography variant="body1" fontSize={24} color="initial">
              {obj.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Container>
  );
}
