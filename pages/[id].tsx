"use client";

import React from "react";
import IconButton from "@mui/material/IconButton";
import { BsChevronLeft } from "react-icons/bs";
import { HiOutlineHeart, HiShare } from "react-icons/hi";
import { useActions } from "@/utils/hooks/useAction";
import { useFavorites } from "@/utils/hooks/useFavorites";
import { FcLike } from "react-icons/fc";
import Box from "@mui/material/Box";
import { useRouter, usePathname } from "next/navigation";
import { Product } from "@/utils/models";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { Card, Divider, Rating, Button } from "@mui/material";
import ProductList from "@/components/elements/home/ProductList";
import MPD from "@/components/elements/about/MobileProductDetails";
import { useCurrency } from "@/utils/hooks/useCurrency";
import { productsApi } from "@/utils/api";
import { AxiosResponse } from "axios";



export default function ProductProfile() {
  const currency = useCurrency()
  const pathnameString = usePathname();
  const pathId = !isNaN(+pathnameString?.slice(1))
    ? +pathnameString?.slice(1)
    : 2;
  const [product, setProduct] = React.useState<Product>();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    productsApi.getProduct(pathId)
    .then(data => setProduct(data))
    .finally( () => setIsLoading(false) )
  }, [pathId]);

  const favorites = useFavorites();
  const { toggleFavorites } = useActions();
  const router = useRouter();

  if (product.id && !isLoading) {
    const {
      id,
      price,
      name,
      description,
      artikul,
      main_image,
      owner,
      rating,
      ratingAmount,
      category,
      sub_category,
      sale,
      sale_price,
      media,
    } = product;

    const medias = [...media?.map((obj) => obj.image)];
    const isFavorite = favorites.some((r: any) => r.id === id);
    const handleToggleFavorites = (item: any) => {
      toggleFavorites(item);
      console.log(isFavorite);
    };

    const allMedia = [main_image, ...medias];
    return (
      <div className=" text-black m-auto p-0 md:p-8  relative">
        <Box display="flex" justifyContent="space-between " sx={{posittion:{xs:"absolute",md:"relative"},background:"transparent  "}}>
          <IconButton
            aria-label=""
            sx={{ boxShadow: 3, borderRadius: 2 ,transform:{xs:"scale(0.7)",md:"scale(0.9)"}}}
            onClick={() => router.back()}
          >
            <BsChevronLeft className="text-3xl" />
          </IconButton>
          <Typography sx={{display:{xs:"flex",md:"none"},alignItems:"center" ,whiteSpace:"nowrap",maxWidth:"150px", overflow:"hidden"}} variant="body1" fontSize={14} color="black">
            <b>{owner}</b> / {name}
          </Typography>  
          <Box display="flex" alignItems='center'>
            <IconButton
              aria-label=""
              sx={{ boxShadow: 3, borderRadius: 2, marginRight: 3 ,transform:{xs:"scale(0.7)",md:"scale(0.9)"}}}
              onClick={() =>
                handleToggleFavorites({ id, name, price, main_image })
              }
            >
              {isFavorite ? (
                <FcLike className="text-3xl" />
              ) : (
                <HiOutlineHeart className="text-3xl" />
              )}
            </IconButton>
            <IconButton aria-label="" sx={{ boxShadow: 3, borderRadius: 2 ,transform:{xs:"scale(0.7)",md:"scale(0.9)"}}}>
              <HiShare className="text-3xl" />
            </IconButton>
          </Box>
        </Box>
        <MPD medias={[main_image, ...medias]} product={product}/>
        
        <Box marginTop={3} sx={{display:{xs:"none",md:"block"}}} >
          <Typography variant="body1" color="initial">
            <b>{owner}</b> / {name}
          </Typography>
          <Box display="flex" gap="20px" sx={{ my: 2 }}>
            <Rating value={rating} precision={0.5} readOnly />
            <Typography variant="body2" color="initial">
              {ratingAmount} отзывов
            </Typography>
            <Typography variant="body2" color="initial">
              Арт: {artikul}
            </Typography>
          </Box>
        </Box>
        <Box className="hidden md:flex justify-between">
          <Box display="flex">
            <Box
              display="flex"
              flexDirection="row-reverse"
              justifyContent="start"
              gap={2}
            >
              <Box
                
                maxHeight={500}
                sx={{ overflow: "hidden", borderRadius: 3 }}
              >
                <Image
                  className="object-cover"
                  src={allMedia[0]}
                  alt={name}
                  width={400}
                  height={500}
                ></Image>
              </Box>
              <Box overflow="auto" maxHeight={500}>
                {allMedia.map((obj) => (
                  <Image
                    className="object-cover rounded-xl mb-1 "
                    src={obj}
                    alt={name}
                    width={100}
                    height={120}
                  ></Image>
                ))}
              </Box>
            </Box>

            <Box width={400} marginLeft={2.5}>
              <Typography
                variant="body1"
                fontSize={16}
                fontWeight={700}
                color="initial"
              >
                О товаре
              </Typography>
              <Typography variant="body1" sx={{my:1}} fontSize={14} color="initial">
                Название: {name}
              </Typography>
              <Typography variant="body1" fontSize={14}  color="initial">
                Описание:
              </Typography>
              <Typography variant="body1" fontSize={14} color="initial">
                {description}
              </Typography>
              <Divider sx={{my:2}} />
              <Typography
                variant="body1"
                fontSize={16}
                fontWeight={700}
                color="initial"
              >
                Дополнительная информация
              </Typography>
              <Typography variant="body1" fontSize={14} color="initial">
                {" "}
                Категория : {category.name}
              </Typography>
              <Typography variant="body1" fontSize={14} color="initial">
                {" "}
                Подкатегория : {sub_category?.name}
              </Typography>
              <Divider sx={{my:2}} />
              <Typography
                variant="body1"
                fontSize={16}
                fontWeight={700}
                color="initial"
              >
                Оцените товар
              </Typography>
              <Rating value={rating} precision={0.5} />
            </Box>
          </Box>
          
          <Card
            elevation={5}
            sx={{
              width: "327px",
              height: "200px",
              borderRadius: 3,
              px: 3.5,
              py: 1.6,
              
            }}
          >
            <Box
              display={"flex"}
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Image
                className="object-cover rounded-[50%] mb-1 w-10 h-10 "
                src={allMedia[0]}
                alt={owner}
                width={40}
                height={40}
              ></Image>
              <Typography
                variant="body1"
                fontSize={16}
                fontWeight={700}
                color="initial"
              >
                {owner}
              </Typography>
              <Typography
                variant="body1"
                fontSize={16}
                fontWeight={700}
                color="initial"
              >
                Рейтинг : {rating}
              </Typography>
            </Box>
            <Box display={"flex"} justifyContent="space-between" mb={2}>
              <Typography variant="body1" color="initial"  fontWeight='bold' fontSize={20} > {Math.ceil((price * currency.rate) * 100) / 100 } {currency.code.toLowerCase()}</Typography>
              {sale && <span>{sale_price} <u>c</u></span> }
              {isFavorite ? (
                <FcLike className="text-3xl" />
              ) : (
                <HiOutlineHeart className="text-3xl" />
              )}
            </Box>
            <Button variant="contained" color="info" fullWidth  className="bg-info rounded-xl py-3.5">Связаться</Button>
          </Card>
        </Box>


        <ProductList/>
      </div>
    );
  }
}
