import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/models';

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [
    {
      id: 1999,
      name: 'Компьютерные очки Xiaomi',
      description: 'This is the description of Product 1.',
      main_image: 'https://img.freepik.com/free-photo/beauty-portrait-young-brunette-woman-with-evening-makeup-perfect-clean-skin-sexy-model-with-long-hair-posing-studio-isolated-blue-dress_158538-25924.jpg',
      price: 1900,
      category: {
        id: 1,
        name: '',
        slug: ''
      },
      sale: false,
      sale_price: null,
      rating: 4.9,
      ratingAmount: 2339,
      media: [{
        id: 1,
        image: "https://i.pinimg.com/736x/9f/f4/b2/9ff4b2efdb746432eb1b70be5e518823.jpg",
        product: 1
      }
      ,{
          id:2,
          image:'https://i.pinimg.com/736x/c4/56/0a/c4560acbcf83ede9cad96ffcc36c6ae3.jpg',
          product:1
        }
      ],
      owner: "Li-ning",
      sub_category: null,
      artikul: ""
    },
    {
      id: 2000,
      name: 'Компьютерные очки Xiaomi 2',
      description: 'This is the description of Product 2.',
      main_image: 'https://img.freepik.com/free-photo/beauty-portrait-young-brunette-woman-with-evening-makeup-perfect-clean-skin-sexy-model-with-long-hair-posing-studio-isolated-blue-dress_158538-25924.jpg',
      price: 1901,
      category: {
        id: 1,
        name: '',
        slug: ''
      },
      sale: false,
      sale_price: null,
      rating: 4.2,
      ratingAmount: 2319,
      media: [{
        id: 1,
        image: "https://i.pinimg.com/736x/9f/f4/b2/9ff4b2efdb746432eb1b70be5e518823.jpg",
        product: 2
      }
      ,{
          id:2,
          image:'https://i.pinimg.com/736x/c4/56/0a/c4560acbcf83ede9cad96ffcc36c6ae3.jpg',
          product:2
        }
      ],
      owner: "Li-ning",
      sub_category: null,
      artikul: ""
    },
   
  ],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
      state.loading = false;
      state.products = [...initialState.products,...action.payload];
      
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;

export default productSlice.reducer;
