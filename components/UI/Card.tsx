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
import { useActions } from "@/hooks/useAction";
import { useFavorites } from "@/hooks/useFavorites";
import { ProductCardProps } from "@/models";



const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  main_image,
  price,
  rating,
  ratingAmount,
}) => {
  const favorites = useFavorites();
  const isFavorite = favorites.some((r) => r.id === id);
  const { toggleFavorites } = useActions();
  const handleToggleFavorites = (item: any) => toggleFavorites(item);

  return (
    <Card sx={{ width: "211px", height: "310px", position: "relative" }}>
      <CardMedia component="img" height="200" image={main_image} alt={name} />
      <CardContent>
        <Link className='' href={`/${id}`}>
          {name}
        </Link>
        <Typography variant="h6" color="primary" sx={{position: "absolute", bottom: 30}} gutterBottom>
          {price}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, position: "absolute", bottom:10 }}>
          <Rating value={rating} precision={0.5} readOnly />
          <Typography variant="body2" color="text.secondary">
            {ratingAmount}
            {}
          </Typography>
        </Box>
      </CardContent>
      <IconButton
        sx={{
          position: "absolute",
          borderRadius: "4px",
          top: 8,
          right: 8,
          color: isFavorite ? "red" : "",
        }}
        onClick={() => handleToggleFavorites({ id, name, price, main_image })}
      >
        <FavoriteIcon />
      </IconButton>
    </Card>
  );
};

export default ProductCard;
