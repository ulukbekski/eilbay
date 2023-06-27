import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  id: number;
  name: string;
}

interface UserState extends Array<UserData> {}

const initialState: UserState = [];

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, { payload }: PayloadAction<UserData>) => {
        const isExist = state.some((r) => r.id === payload.id);
        
      },
    },
  });