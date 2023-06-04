/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className='navbar'>
           <div><h2 className='navbar-logo'>Finding-<span className='span-design-main'>Goal</span></h2></div>
           <div className='nav-link'>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/statistics">Statistics</NavLink>
                <NavLink to="/appliedJobs" >Applied Jobs</NavLink>
                <NavLink to="/blog">Blog</NavLink>
           </div>
            {
                isOpen?(
                    <>
                     <div className='nav-link-block'>
                        <NavLink to="/" className={`nav-item`}>Home</NavLink>
                        <NavLink to="/statistics" className={`nav-item`}>Statistics</NavLink>
                        <NavLink to="/appliedJobs" className={`nav-item`}>Applied Jobs</NavLink>
                        <NavLink to="/blog" className={`nav-item`}>Blog</NavLink>
                    </div>
                    </>
                ):(
                    <>
                     <div className='nav-link-hide'>
                        <NavLink to="/" className={`nav-item`}>Home</NavLink>
                        <NavLink to="/statistics" className={`nav-item`}>Statistics</NavLink>
                        <NavLink to="/appliedJobs" className={`nav-item`}>Applied Jobs</NavLink>
                        <NavLink to="/blog" className={`nav-item`}>Blog</NavLink>
                    </div>
                    </>
                )
            }
          
           <div className='mobile-togler'>
             {
                isOpen?(
                    <XMarkIcon onClick={()=>setIsOpen(!isOpen)} className="mobile-menu" />
                ):(
                    <Bars3Icon onClick={()=>setIsOpen(!isOpen)} className="mobile-menu" />
                )
             }
           </div>
           <Link>
                <button className='main-btn nav-btn'>Start Applying</button>
           </Link>
        </nav>
    );
};

export default Navbar;