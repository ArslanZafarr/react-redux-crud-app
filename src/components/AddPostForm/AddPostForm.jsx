import React, { useState } from 'react'
import '../AddPostForm/AddPostForm.css'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addPost } from '../../features/Post/PostSlice'

const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const titleOnChange = e => setTitle(e.target.value)
    const contentOnChange = e => setContent(e.target.value)

    const OnPostClick = () => {
        if (title && content) {
            dispatch(
                addPost({
                    id: nanoid(),
                    title,
                    content,
                })
            )
            setTitle('')
            setContent('')
        }
    }

    return (
        <section className='post-form-section'>
            <form className='post-form'>
                <label htmlFor="postTilte">Title</label>
                <input
                    type="text"
                    id='postTitle'
                    placeholder='Title'
                    onChange={titleOnChange}
                />

                <label htmlFor="postContent">Content</label>
                <textarea
                    id='postContent'
                    placeholder='content...'
                    onChange={contentOnChange}
                />
                <button
                    onClick={OnPostClick}
                    type='button'
                > Post
                </button>
            </form>
        </section>
    )
}

export default AddPostForm