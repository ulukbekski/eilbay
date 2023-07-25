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
      id: 1,
      title: 'Компьютерные очки Xiaomi MI computer',
      description: 'This is the description of Product 1.',
      thumbnail: 'https://img.freepik.com/free-photo/beauty-portrait-young-brunette-woman-with-evening-makeup-perfect-clean-skin-sexy-model-with-long-hair-posing-studio-isolated-blue-dress_158538-25924.jpg',
      price: 1900,
      category:"",
      rating: 4.9,
      ratingAmount: 2339,
      images:["https://i.pinimg.com/736x/9f/f4/b2/9ff4b2efdb746432eb1b70be5e518823.jpg",'https://i.pinimg.com/736x/c4/56/0a/c4560acbcf83ede9cad96ffcc36c6ae3.jpg']
    },
    {
      id: 2,
      title: 'Компьютерные очки Xiaomi MI computerd',
      description: 'This is the description of Product 2.',
      thumbnail: 'https://img.freepik.com/free-photo/beauty-portrait-young-brunette-woman-with-evening-makeup-perfect-clean-skin-sexy-model-with-long-hair-posing-studio-isolated-blue-dress_158538-25924.jpg',
      price: 1900,
      category:"",
      rating: 4.9,
      ratingAmount: 2339,
      images:["https://i.pinimg.com/736x/9f/f4/b2/9ff4b2efdb746432eb1b70be5e518823.jpg",'https://i.pinimg.com/736x/c4/56/0a/c4560acbcf83ede9cad96ffcc36c6ae3.jpg']
      
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'This is the description of Product 3.',
      thumbnail: 'https://img.freepik.com/free-photo/beauty-portrait-young-brunette-woman-with-evening-makeup-perfect-clean-skin-sexy-model-with-long-hair-posing-studio-isolated-blue-dress_158538-25924.jpg',
      price: 1900,
      category:"",
      rating: 4.1,
      ratingAmount: 2339,
      images:["https://i.pinimg.com/736x/9f/f4/b2/9ff4b2efdb746432eb1b70be5e518823.jpg",'https://i.pinimg.com/736x/c4/56/0a/c4560acbcf83ede9cad96ffcc36c6ae3.jpg']
    }
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
      state.products = action.payload;
      console.log(state.products)
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;

export default productSlice.reducer;
