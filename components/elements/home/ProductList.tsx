import React,{useState,useEffect} from "react";
import { Container, Button } from "@mui/material";
import ProductCard from "./ProductCard";
import { useProducts } from "@/utils/hooks/useProducts";
import { useSearchValue } from "@/utils/hooks/useSearchValue";
import { useFilters } from "@/utils/hooks/useFilters";
import { productsApi } from "@/utils/api";



function ProductList() {
 
  const products = useProducts()
  const filters = useFilters()
  const searchValue = useSearchValue()
  
  React.useEffect(()=>{
    productsApi.getProducts()
  },[])
  const filteredProducts = products.filter(product => 
    product.name.toUpperCase().includes(searchValue.query.toUpperCase())
    &&
    (
      filters.minPrice < product.price 
        &&
      filters.maxPrice > product.price
    )
    
    
    )
  return (
    <Container sx={{ mt: 1 ,p:{xs:0,md:1} }}>
      <div className=" flex-center flex-wrap gap-[22px] md:gap-[16px] nowrap mt-[34px]">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Button variant="contained" className="bg-info block my-3 mx-auto px-16 py-4 rounded-lg">
        Еще
      </Button>
    </Container>
  );
}

export default ProductList;
