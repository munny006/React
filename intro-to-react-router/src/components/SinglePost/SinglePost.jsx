import React from 'react';
import { Link } from 'react-router-dom';
import './SinglePost.css'

const SinglePost = ({post}) => {
    const{id,title,body} = post;
    return (
        <div className='post'>
            <h5>ID:{id}</h5>
            <h4>Title : {title}</h4>
            <p>Body :{body}</p>
            <Link to={`/post/${id}`}>Details</Link>
            <button>Show Post Detail</button>
        </div>
    );
};

export default SinglePost;