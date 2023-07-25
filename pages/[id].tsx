"use client";

import React from "react";
import IconButton from "@mui/material/IconButton";
import { BsChevronLeft } from "react-icons/bs";
import { HiOutlineHeart, HiShare } from "react-icons/hi";
import { useActions } from "@/hooks/useAction";
import { useFavorites } from "@/hooks/useFavorites";
import { FcLike } from "react-icons/fc";
import Box from "@mui/material/Box";
import { fetchProducts } from "@/utils/api";
import { useRouter, usePathname } from "next/navigation";
import { Product } from "@/models";
import { useProducts } from "@/hooks/useProducts";
// import { usePathname} from 'next/navigation'




export default function ProductProfile() {

  const allProducts = useProducts();
  const pathname = usePathname();
  
  const product = allProducts.find((obj) => obj.id === +pathname.slice(1));

  if (!product) {
    return <div>Product not found</div>;
  }
  
  const { id, title, thumbnail, price, images } = product;

  const favorites = useFavorites();
  const isFavorite = favorites.some((r) => r.id === id);
  const { toggleFavorites } = useActions();
  
  const handleToggleFavorites = (item: any) => {toggleFavorites(item);console.log(isFavorite)};

  const router = useRouter();

  return (
    <div className=" text-black m-auto p-8">
      <Box display="flex" justifyContent="space-between">
        <IconButton
          aria-label=""
          sx={{ boxShadow: 3, borderRadius: 2 }}
          onClick={() => router.back()}
        >
          <BsChevronLeft className="text-3xl" />
        </IconButton>
        <Box>
          <IconButton
            aria-label=""
            sx={{ boxShadow: 3, borderRadius: 2, marginRight: 3 }}
            onClick={() =>
              handleToggleFavorites({ id, title, price, thumbnail })
            }
          >
            {isFavorite ? (
              <FcLike className="text-3xl" />
            ) : (
              <HiOutlineHeart className="text-3xl" />
            )}
          </IconButton>
          <IconButton
            aria-label=""
            sx={{ boxShadow: 3, borderRadius: 2 }}
            onClick={fetchProducts}
          >
            <HiShare className="text-3xl" />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
}
