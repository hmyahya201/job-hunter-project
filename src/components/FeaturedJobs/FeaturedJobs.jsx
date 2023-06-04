/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './FeaturedJobs.css';
import Jobs from '../Jobs/Jobs';
import { useLoaderData } from 'react-router-dom';

const FeaturedJobs = ({feturedJobs}) => {
    const [showMore, setShowMore] = useState(false)
    return (
        <div className='featured-jobs'>
            <h1 className='featured-jobs-titel'>Featured Jobs</h1>
            <p className='featured-jobs-des'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='fratured-jobs-container'>
                {
                    showMore?feturedJobs.map(job=><Jobs
                        key={job.id}
                        job={job} 
                    ></Jobs>):feturedJobs.slice(0, 4).map(job=><Jobs
                        key={job.id}
                        job={job} 
                    ></Jobs>)
                }
            </div>
            {
                showMore?<button onClick={()=>setShowMore(false)}  className='main-btn see-all-jobs-btn'>Show Less</button>:<button onClick={()=>setShowMore(true)}  className='main-btn see-all-jobs-btn'>See All Jobs</button>
            }
        </div>
    );
};

export default FeaturedJobs;