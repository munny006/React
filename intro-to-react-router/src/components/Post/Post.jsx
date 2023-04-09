import React from 'react';
import {useLoaderData} from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';
const Post = () => {
    const post = useLoaderData();
    console.log(post)
    return (
        <div>
            <h3>All post are here : {post.length}</h3>
            <div>
                {
                    post.map(post =><SinglePost
                        key = {post.id}
                        post ={post}
                    ></SinglePost>)
                }
            </div>
        </div>
    );
};

export default Post;