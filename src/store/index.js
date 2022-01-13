// import Redux
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialCounterState ={counter:0, showCounter:true}

// This Slice is resposible for working with our counter state
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers:{
        increment(state) {
            state.counter++
        },
        decrement(state){
            state.counter++
        },
        increase(state,action) {
            state.counter = state.counter + Number(action.amount)
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        },
    }
})

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
export const counterAction = counterSlice.actions


// Create a new Store. 
// ConfigureStore will combie all our slices and create a map when we have multiple global slices
const store= configureStore({
    reducer:{
        counter: counterSlice.reducer,
        authentication: authenticationSlice.reducer
    }
})

export default store

