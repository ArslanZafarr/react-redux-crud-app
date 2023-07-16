import React from 'react'
import '../PostsList/PostList.css'
const PostsList = () => {
    return (
        <section>
            <div className='posts-list'>
                <article className='post'>
                    <h3>Title</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quas id voluptate illo nam numquam ratione reprehenderit. Illum, explicabo esse.</h5>
                </article>
                <article className='post'>
                    <h3>Title</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quas id voluptate illo nam numquam ratione reprehenderit. Illum, explicabo esse.</h5>
                </article>
            </div>

        </section>
    )
}

export default PostsList