import axios from "axios";
import { CreateUserDto , LoginDto, ResponseUser} from "./types";
import { fetchProductsFailure, fetchProductsStart, fetchProductsSuccess } from "@/store/products/products.slice";
import { Product } from "@/models";


const instance = axios.create({
    baseURL:""
});


export const userApi = {
    async register(dto: CreateUserDto) {
        const {data} = await instance.post<CreateUserDto, {data:ResponseUser}>("/auth/register", dto)
        return data;
    },
    async login(dto: LoginDto) {
        const {data} = await instance.post<LoginDto, {data:ResponseUser}>("/auth/login", dto)
        return data;
    }
}



  


export const fetchProducts = () => async (dispatch:any) => {
    dispatch(fetchProductsStart());
    try {
      const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
      const products = response.data;
      dispatch(fetchProductsSuccess(products));
    } catch (error:any) {
      const errorMessage = error.message;
      dispatch(fetchProductsFailure(errorMessage));
    }
  };
