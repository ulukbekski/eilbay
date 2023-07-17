import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Rating, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useActions } from '@/hooks/useAction';
import { useFavorites } from '@/hooks/useFavorites';

interface ProductCardProps {
  id:number;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  ratingAmount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  image,
  price,
  rating,
  ratingAmount,
}) => {
  
  const favorites  = useFavorites()
  const isFavorite = favorites.some(r => r.id === id)
  const {toggleFavorites} = useActions()
  const handleToggleFavorites = (item:any) => toggleFavorites(item)

  return (
    <Card sx={{ width: "211px", height:"310px", position:"relative" }}>
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent>
        <Typography variant="body2" component="div">
          {title}
        </Typography>
        <Typography variant="h6" color="primary" gutterBottom>
          {price}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Rating value={rating} precision={0.5} readOnly />
          <Typography variant="body2" color="text.secondary">
            {ratingAmount}{}
          </Typography>
        </Box>
      </CardContent>
      <IconButton
        sx={{ position: "absolute",
        borderRadius:'4px'  , 
        top: 8, 
        right: 8, 
        color: isFavorite?"red":"" }}
        onClick={() => handleToggleFavorites({id,title,price,image})}>
        <FavoriteIcon />
      </IconButton>
    </Card>
  );
};

export default ProductCard;
