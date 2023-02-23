import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: "checking",
    uid: null,
    email: null,
    displayName: null,
    photo: null, 
    errorMessage: null,
  },
  reducers: {

    login: (state, {payload}) => {
      state.status= "authenticated",
      state.uid= payload.uid,
      state.email= payload.email,
      state.displayName= payload.displayName,
      state.photoURL= payload.photoURL, 
      state.errorMessage= null
    },

    logout: (state, {payload}) => {
      state.status= "not-athenticated",
      state.uid= null,
      state.email= null,
      state.displayName= null,
      state.photo= null, 
      state.errorMessage= payload?.errorMessage
    },

    checkingCredentials: (state) => {
        state.status = "checking"
    },
  },
})


export const { login, logout, checkingCredentials } = authSlice.actions