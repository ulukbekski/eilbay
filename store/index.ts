import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from './favorites/favorites.slice'
// import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from './products/products.slice'
import productSliceReducer from './products/products.slice'

// const reducers = combineReducers({
//     favorites:favoritesReducer,
// })

export const store  = configureStore({
    reducer: {
        products : productSliceReducer,
        favorites : favoritesReducer
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch

export default store;