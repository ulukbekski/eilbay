import React,{useState,useEffect} from "react";
import { Container, Button } from "@mui/material";
import ProductCard from "../../UI/ProductCard";
import { useProducts } from "@/hooks/useProducts";

import { fetchProductsStart, fetchProductsSuccess } from "@/store/products/products.slice";
import { useActions } from "@/hooks/useAction";
import axios from "axios";

function ProductList() {
  // const [products, setProducts] = useState<ProductCardProps[]>([]);
  const products = useProducts()
  const {fetchProductsSuccess} = useActions()
  
  const add = async () => {
    const res = await axios.get('http://80.90.184.58/api/product')
    fetchProductsSuccess(res.data)
  }
  
  React.useEffect(()=>{
    add()
  },[])

  return (
    <Container sx={{ mt: 1 }}>
      <div className=" flex-center flex-wrap  gap-[22px] nowrap mt-[34px]">
        {products.map((product) => (
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
