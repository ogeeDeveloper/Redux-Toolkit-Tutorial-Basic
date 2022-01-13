import {createSlice} from '@reduxjs/toolkit'

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

export const counterAction = counterSlice.actions

export default counterSlice.reducer