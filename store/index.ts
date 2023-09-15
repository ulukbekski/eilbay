import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from './favorites/favorites.slice';
import { reducer as userSlice } from './user/user.slice'


const reducers = combineReducers({
    favorites:favoritesReducer,
    users: userSlice
})

export const store  = configureStore({
    reducer: {
       reducers
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>