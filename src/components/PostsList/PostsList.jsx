import React from 'react'
import '../PostsList/PostList.css'
import { useSelector } from 'react-redux'
import PostAuthor from './PostAuthor'
import { selectAllUsers } from '../../features/users/userSlice'
const PostsList = () => {
    const postList = useSelector((state) => state.post)
    console.log("🚀 ~ file: PostsList.jsx:8 ~ PostsList ~ postList:", postList)



    return (
        <section>
            <div className='posts-list'>
                {postList.map((post) => {
                    return <article key={post.id} className='post'>
                        <h3>{post.title}</h3>
                        <h5>{post.content}</h5>
                        <div className='post-author'><PostAuthor userId={post.userId} /></div>
                        <h2>{post.userId}</h2>
                    </article>
                })}


            </div>

        </section>
    )
}

export default PostsList