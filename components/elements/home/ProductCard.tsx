import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useActions } from "@/utils/hooks/useAction";
import { useFavorites } from "@/utils/hooks/useFavorites";
import { ProductCardProps } from "@/utils/models";
import { useCurrency } from "@/utils/hooks/useCurrency";

interface FavoriteProduct {
  id:number;
  main_image:string;
  name:string;
  description: string|null;
  price:number;
  sale:boolean;
  sale_price: number | null;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  main_image,
  price,
  rating,
  ratingAmount,
  description,
  sale,
  sale_price,
}) => {
  const currency = useCurrency()
  const favorites = useFavorites();
  const isFavorite = favorites.some((r) => r.id === id);
  const { toggleFavorites } = useActions();
  const handleToggleFavorites = (item: FavoriteProduct ) => toggleFavorites(item);

  return (
    <Card sx={{ 
      width: {xs:"165px",sm:'180px',md:'211px'},
      position: "relative",
      boxShadow: "0px 0px 12px 0px rgba(61, 66, 74, 0.20)}",
    }} 
      
      >
      <CardMedia component="img" sx={ {width: {xs:"165px",sm:'180px',md:'211px'}, height: {xs:"160px",sm:'180px',md:'211px'}}} 
       image={main_image} 
       alt={name} />
      <CardContent sx={{position:"relative", p:"10px", height:"100px" }}>
        <Link className='text-[14px] p-0' href={`/${id}`}>
          {name}
        </Link>
        <Typography variant="h6" color="primary" sx={{position: "absolute", bottom:"25px", fontSize:{xs:14,sm:16,md:18}}} gutterBottom>
          {Math.ceil((price * currency.rate) * 100) / 100 } {currency.code.toLowerCase()}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, position: "absolute", bottom:5 }}>
          <Rating value={rating} precision={0.5} readOnly />
          <Typography variant="body2" color="text.secondary">
            {ratingAmount}
            
          </Typography>
        </Box>
      </CardContent>
      
      <IconButton
        className="bg-white opacity-70"
        sx={{
          position: "absolute",
          width: "36px",
          height: "36px",
          filter: "blur(10)",
          borderRadius: "8px",
          background: "white",
          opacity: 0.7,
          top: 8,
          right: 8,
          color: isFavorite ? "red" : "",
          ":hover":{
            background:"white",
            opacity: 0.7,
          }
        }}
        onClick={() => handleToggleFavorites({ id, name, price, main_image , sale, sale_price, description})}
      >
       {isFavorite  ? <FavoriteIcon /> : <FavoriteBorderIcon /> }

      </IconButton>
    </Card>
  );
};

export default ProductCard;
