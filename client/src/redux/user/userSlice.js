import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser:null,
    loading:false,
    error:false,
    theme:null,
    delete:false,
};

const  userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading = true

        },
        signInSuccess:(state,action)=>{
            state.currentUser = action.payload
            state.loading = false
            state.error = false
        },
        signInFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload


        },updateUserStart: (state) => {
            state.loading = true;
          },
          updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
          },
          updateUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
          deleteUserStart: (state) => {
            state.loading = true;
          },
          deleteUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = false;
          },
          deleteUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
          signOut: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = false;
          },
          setTheme:(state,action)=>{
            state.theme = action.payload
          },
          setDelete:(state)=>{
            state.delete = true
          }
    }
})

export const {
    signInStart,
    signInSuccess,
    signInFailure,
    updateUserFailure,
    updateUserStart,
    updateUserSuccess,
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    signOut,
    setTheme,
    setDelete
  } = userSlice.actions;

export default userSlice.reducer