import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <div class="container pt-4">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <h2 className='fw-bold'>Knowledge Cafe</h2>
                        <img className='nav-img' src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                </nav>
            </div>
            <hr />
        </div>
    );
};

export default Header;