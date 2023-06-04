/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css'
import headImg from '../../assets/images/P3OLGJ1 copy 1.png'
const Header = () => {
    return (
        <header className='header'>
            <div className='header-left'>
                <h1 className='head-title'>One Step Closer To Your <span className='span-design-main'>Dream Job</span></h1>

                <p className='head-des'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                <button className='main-btn'>Get Started</button>
            </div>
            <div className='header-right'>
                <img className='head-img' src={headImg} alt="" />
            </div>
        </header>
    );
};

export default Header;