import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from './favorites/favorites.slice'
import productSliceReducer from './products/products.slice'
import userSlice from "./user/user.slice";

const reducers = combineReducers({
    favorites :favoritesReducer,
    products : productSliceReducer,
    user: userSlice
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