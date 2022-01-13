import {createSlice} from '@reduxjs/toolkit'

const initialAuthState={isAuthenticated:false}

// Authentication Store for handling login/logout global state
const authenticationSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated=true
        },
        logout(state){
            state.isAuthenticated=false
        },
    }
})

export const authAction = authenticationSlice.actions

export default authenticationSlice.reducer