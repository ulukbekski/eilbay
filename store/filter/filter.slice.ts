
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Filter {
    minPrice: number;
    maxPrice: number;
    country: string;
    category: string;
    subCategory: string;
}
interface FilterState {
    filterParams : Filter
}


const initialState: FilterState = {
    filterParams: {
        minPrice: 0,
        maxPrice: 10000000000,
        country: "Все",
        category: "Все",
        subCategory: "Все"
    }

};

const filterSlice = createSlice({
  name: 'filtration',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<Filter>) {
      state.filterParams = action.payload   
    }
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
