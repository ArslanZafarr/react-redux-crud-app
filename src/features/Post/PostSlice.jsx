import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: 'what is redux', content: 'Welcome to the Redux Toolkit Quick Start tutorial! This tutorial will briefly introduce you to Redux Toolkit and teach you how to start using it correctly.' },
    { id: 2, title: 'how to setup redux toolkit', content: 'Welcome to the Redux Toolkit Quick Start tutorial! This tutorial will briefly introduce you to Redux Toolkit and teach you how to start using it correctly.' },

]

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: { id: nanoid(), title, content, userId }
                }
            }
        }
    }
})

export default postSlice

export const { addPost } = postSlice.actions