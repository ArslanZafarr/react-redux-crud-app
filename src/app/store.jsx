import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/Post/PostSlice";


const store = configureStore({
    reducer: {
        post: postSlice.reducer
    }
})

export default store