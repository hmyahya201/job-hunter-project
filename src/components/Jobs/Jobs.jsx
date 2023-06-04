/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import place_icon from '../../assets/Icons/Location Icon.png';
import doller_icon from '../../assets/Icons/Frame.png';
import './Jobs.css'
import { Link } from 'react-router-dom';

const Jobs = ({job}) => {
    const {id, brand_icon, job_title, brand_name, job_type1, job_type2, place,salary} = job
    return (
        <div className='fetured-job-box'>
            <img className='brand-icon' src={brand_icon} alt="brand icon" />
            <h2 className='job-title'>{job_title}</h2>
            <p className='brand-name'>{brand_name}</p>
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
            <Link to={`/jobDetails/${id}`}><button className='secondary-btn'>View Details</button></Link>
        </div>
    );
};

export default Jobs;