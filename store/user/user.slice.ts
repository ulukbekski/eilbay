import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  id: number|null;
  email: string|null;
  token: string|null
}


const initialState: UserData = {
  id: null,
  email: null,
  token: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        delUser: (state) => {   
          state.email = null;
          state.id = null;
          state.token = null;
      },
      setUser: ( state, { payload }: PayloadAction<UserData>)=>{
        state.email = payload.email;
        state.id = payload.id;
        state.token = payload.token;
      }
    },
  });


export const { actions, reducer } = userSlice

