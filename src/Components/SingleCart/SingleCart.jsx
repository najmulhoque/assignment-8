import React from 'react';
import './SingleCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer } from 'react-toastify';

const SingleCart = ({ item, handleBookMark, handleSpendTime }) => {

    const { img, author_img, author_name, publish_date, blog_title, book_mark_time } = item
    return (
        <div>
            <div className="cart-container ">
                <div className="single-cart container">
                    <img className='image-banner rounded pt-3' src={img} alt="" />
                    <div className="author-info pt-3 py-auto ">
                        <div className='d-flex gap-3'>
                            <div> <img className='portfolio' src={author_img} alt="" /></div>
                            <div className='d-flex row'>
                                <h6>{author_name}</h6>
                                <p>{publish_date}</p>
                            </div>

                        </div>
                        <div className='d-flex flex-shrink-0 gap-1 p-3'>
                            <p className=''>{book_mark_time} min read</p>
                            <span onClick={() => handleBookMark(item)} role='button'> <FontAwesomeIcon icon={faBookmark} /> </span>
                        </div>
                    </div>
                    <h2>{blog_title}</h2>
                    <div className='d-flex gap-3'>
                        <p>#beginners </p>
                        <p>#programming</p>
                    </div>
                    <p className='text-primary' onClick={() => handleSpendTime(item)} role='button'>Mark as a read</p>

                </div>
                <hr />
            </div>
            <ToastContainer />
        </div>
    );
};

export default SingleCart;