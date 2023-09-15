import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from './favorites/favorites.slice'
import {reducer as userSlice } from "./user/user.slice";
import productSliceReducer from './products/products.slice'
import searchValue from "./search/search.slice"
import currency from "./currency/currency.slice"
import filters from './filter/filter.slice'


const reducers = combineReducers({
    favorites :favoritesReducer,
    products : productSliceReducer,
    user: userSlice,
    searchValue,
    currency,
    filters
})

export const store  = configureStore({
    reducer: {
       reducers
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export default store;