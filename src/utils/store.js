import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";
import textSlice from "./textSlice";


const store = configureStore ({
    reducer : {
        chat : chatSlice,
        text : textSlice,
    }
})

export default store;