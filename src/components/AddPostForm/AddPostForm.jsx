import React from 'react'
import '../AddPostForm/AddPostForm.css'
const AddPostForm = () => {
    return (
        <section className='post-form-section'>
            <form className='post-form'>
                <label htmlFor="postTilte">Title</label>
                <input type="text" id='postTitle' placeholder='Title' />
                <label htmlFor="postContent">Content</label>
                <textarea id='postContent' placeholder='content...' ></textarea>
                <button type='button'> Post</button>
            </form>
        </section>
    )
}

export default AddPostForm