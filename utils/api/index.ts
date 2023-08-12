import axios from "axios";
import { CreateUserDto , LoginDto, ResponseUser} from "./types";
import { fetchProductsSuccess } from "@/store/products/products.slice";
import { Product } from "../models/product";

export const instance = axios.create({
  baseURL:"http://176.57.213.250/api/v1/"
});


export const userApi = {
  async register(dto: CreateUserDto) {
    const {data} = await instance.post<CreateUserDto, {data:ResponseUser}>("/register", dto)
      return data;
  },
  async login(dto: LoginDto) {
    const {data} = await instance.post<LoginDto, {data:ResponseUser}>("/login", dto)
    return data;
  }
}

export const productsApi = {
  async getProducts(){
    const {data} = await instance.get("/product")
    fetchProductsSuccess(data)
  },
  async getProduct(_id:number){
    try {
      const product = await instance.get<Product>(`/product/${_id}`);
      return product
    } catch (error) {
      console.error(error);

    }
    
  }

}
    










    // import { fetchProductsFailure, fetchProductsStart, fetchProductsSuccess } from "@/store/products/products.slice";
    // import { Product } from "@/models";
// export const fetchProducts = () => async (dispatch:any) => {
//     dispatch(fetchProductsStart());
//     try {
//       const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
//       const products = response.data;
//       dispatch(fetchProductsSuccess(products));
//     } catch (error:any) {
//       const errorMessage = error.message;
//       dispatch(fetchProductsFailure(errorMessage));
//     }
//   };

// import axios from "axios";
// import { Product } from "./types";

// const instance = axios.create({
//   baseURL: "https://example.com/api",
// });

// export const productApi = {
//   async create(product: Product) {
//     const { data } = await instance.post<Product, { data: Product }>(
//       "/products",
//       product
//     );
//     return data;
//   },

//   async update(id: number, product: Product) {
//     const { data } = await instance.put<Product, { data: Product }>(
//       `/products/${id}`,
//       product
//     );
//     return data;
//   },

//   async delete(id: number) {
//     await instance.delete(`/products/${id}`);
//   },
// };
