import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../../features/Post/PostSlice'
const CreatePost = () => {
    const [postdata, SetPostData] = useState(
        {
            id: 0,
            title: "",
            content: "",
        }
    )
    const dispatch = useDispatch()
    const postList = useSelector((state) => state.post)
    console.log("🚀 ~ file: CreatePost.jsx:7 ~ CreatePost ~ postList:", postList)
    return (
        <>
            <div>
                <h1>Add Feed</h1>
                <input type="text" placeholder='Title' onChange={(e) => SetPostData.title(e.target.value)} />
                <textarea placeholder='content' onChange={() => SetPostData.content(e.target.value)} />
                <button onClick={() => dispatch(addPost({ postdata }))}>Post</button>
            </div>

            <h4>{postdata.title}</h4>

            <div className='List-of-posts'>
                {
                    postList.map((post) => {
                        return (
                            <div key={post.id} className='published-post'>
                                <h1>{post.title}</h1>
                                <p>{post.content}</p>
                            </div>
                        )
                    })
                }

            </div>

        </>
    )
}

export default CreatePost