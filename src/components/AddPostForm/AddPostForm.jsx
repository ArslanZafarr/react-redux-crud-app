import React, { useState } from 'react'
import '../AddPostForm/AddPostForm.css'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../../features/Post/PostSlice'
import { selectAllUsers } from '../../features/users/userSlice'

const AddPostForm = () => {
    const dispatch = useDispatch()

    const users = useSelector(selectAllUsers)

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [userId, setUserId] = useState("")


    const titleOnChange = e => setTitle(e.target.value)
    const contentOnChange = e => setContent(e.target.value)
    const authorOnChange = e => setUserId(e.target.value)


    const OnPostClick = () => {
        if (title && content) {
            dispatch(
                addPost(title, content, userId)
            )
            setTitle('')
            setContent('')
        }
    }


    const authorOptions = users.map((user) => {
        return <option
            key={user.id}
            value={user.id}
        >
            {user.name}
        </option>
    })

    const canPost = Boolean(title) && Boolean(content) && Boolean(userId)

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

                <label htmlFor="AuthorSelect">Author</label>
                <select id='AuthorSelect' value={userId} onChange={authorOnChange} >
                    <option value=""></option>
                    {authorOptions}
                </select>


                <label htmlFor="postContent">Content</label>
                <textarea
                    id='postContent'
                    placeholder='content...'
                    onChange={contentOnChange}
                />
                <button
                    onClick={OnPostClick}
                    type='button'
                    disabled={!canPost}
                > Post
                </button>
            </form>
        </section>
    )
}

export default AddPostForm