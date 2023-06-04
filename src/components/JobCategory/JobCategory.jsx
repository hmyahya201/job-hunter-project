/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './JobCategory.css'

const JobCategory = ({jobCategory}) => {
    const {icon, title, avilability
    } = jobCategory
    return (
        <div className='job-category-box'>
            <img className='category-icon' src={icon} alt="icon" />
            <h3 className='category-title'>{title}</h3>
            <p className='category-info'>{avilability
}</p>
        </div>
    );
};

export default JobCategory;