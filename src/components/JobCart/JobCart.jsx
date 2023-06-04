/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './JobCart.css'
import place_icon from '../../assets/Icons/Location Icon.png'
import doller_icon from '../../assets/Icons/Frame.png'
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const JobCart = ({job}) => {
    const {brand_icon, job_title, brand_name, job_type1, job_type2, place, salary, id} = job
    return (
        <div className='review-job'>
        <div className='brand-img' >
            <img className='brand-icon' src={brand_icon} alt="" />
        </div>
        <div className="review-details-container">
            <div className="review-details">
                <h3>{job_title}</h3>
                <p><small>{brand_name}</small></p>
                <div className='job-type'>
                <button className='job-type-btn'>{job_type1}</button>
                <button className='job-type-btn'>{job_type2}</button>
            </div>
            <div className='job-detail'>
                <div className='location'>
                    <img className='location-icon' src={place_icon} alt="placeicon"/>
                    <p className='location-info'>{place}</p>
                </div>
                <div className='salary'>
                    <img className='salary-icon' src={doller_icon} alt="dollericon"/>
                    <p className='salary-info'>{salary}</p>
                </div>
            </div>
            </div>
            <div className="delete-container">
            <Link to={`/jobDetails/${id}`}><button className='secondary-btn'>View Details</button></Link>
            </div>
        </div>
    </div>
    );
};

export default JobCart;