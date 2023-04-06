import React from 'react';
import './Blog.css'

const Blog = ({ blog }) => {
    console.log(blog)
    return (
        <div>
            <div>
                <h5 className='blog'>{blog.blog_title}</h5>
            </div>
        </div>
    );
};

export default Blog;