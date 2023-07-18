import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/Post/PostSlice";
import userSlice from "../features/users/userSlice";


const store = configureStore({
    reducer: {
        post: postSlice.reducer,
        users: userSlice.reducer,
    }
})

export default store