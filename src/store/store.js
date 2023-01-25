import {configureStore} from "@reduxjs/toolkit"
import movies from '../reducers'


const store = configureStore({reducer : movies});

console.log(store)
export default store;