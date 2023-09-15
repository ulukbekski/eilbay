
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Currency } from '@/components/UI/CurrencySelect';

interface currencyState {
  currency: Currency;
  
}
const som = {
  code: "KGS",
  // symbol: "c",
  name: "Kyrgyzstan som",
  rate: 1,
}  

const initialState: currencyState = {
  currency: som
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency(state, action: PayloadAction<Currency>) {
      state.currency =  action.payload.code === som.code ? som : action.payload    
    }
  },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;