import {configureStore} from "@reduxjs/toolkit"
import movies from '../reducers'

// create a centralize store for our app using configureStore
const store = configureStore({reducer : movies});

// console.log(store)
export default store;