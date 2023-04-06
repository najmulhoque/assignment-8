import React, { useEffect, useState } from 'react';
import './SideBar.css'
import Blog from '../Blog/Blog';

const SideBar = ({ spendTime, data }) => {
    const [totalTime, setTotalTime] = useState(0)
    useEffect(() => {
        const time = spendTime.reduce((newTime, item) => {
            console.log(item)
            return newTime + item.book_mark_time
        }, 0)
        setTotalTime(time)
    }, [spendTime])



    return (
        <div className='side-bar'>
            <div>
                <h5 className='spent-time'>Spent time on read {totalTime} min</h5>
            </div>
            <h4>Bookmarked Blogs : {data.length} </h4>
            {data.map(blog => <Blog blog={blog} key={blog.id}></Blog>)}
        </div>
    );
};

export default SideBar;