// import Redux
import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from './authentication-slice'
import counterReducer from './authentication-slice'


// Create a new Store. 
// ConfigureStore will combie all our slices and create a map when we have multiple global slices
const store= configureStore({
    reducer:{
        counter: counterReducer,
        authentication: authenticationReducer
    }
})

export default store

