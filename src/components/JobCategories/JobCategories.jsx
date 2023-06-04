/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';
import './JobCategories.css'
const JobCategories = () => {
    const [jobCategories, setJobCategories] = useState([])
    useEffect(()=>{
        fetch('jobCategory.json')
        .then(res=>res.json())
        .then(data=>setJobCategories(data))
    },[])
    return (
        <div className='job-categories'>
            <h2 className='job-categories-title'>Job Category List</h2>
            <p className='job-categories-des'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='jo-categories-container'>
                {
                    jobCategories.map(jobCategory=><JobCategory
                    key={jobCategory.id}
                    jobCategory={jobCategory}
                    ></JobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategories;