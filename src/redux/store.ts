import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./todoSlice"

import userDetailsReducer from "./userDetailsSlice"

// the configureStore returns a store object

export default configureStore({

    // holds all the required reducers
    reducer: {
        todos: todoReducer,
        userDetails: userDetailsReducer
    }

})

