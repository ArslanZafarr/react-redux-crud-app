import React from 'react'
import '../PostsList/PostList.css'
import { useSelector } from 'react-redux'
const PostsList = () => {
    const postList = useSelector((state) => state.post)

    return (
        <section>
            <div className='posts-list'>
                {postList.map((post) => {
                    return <article key={post.id} className='post'>
                        <h3>{post.title}</h3>
                        <h5>{post.content}</h5>
                    </article>
                })}


            </div>

        </section>
    )
}

export default PostsList