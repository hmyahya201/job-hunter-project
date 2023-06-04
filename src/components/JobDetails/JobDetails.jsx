/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {useLoaderData, useParams } from 'react-router-dom';
import allData from '../../../public/feturedJobs.json'
import './JobDetails.css'
import frame from '../../assets/Icons/Frame.png'
import frame1 from '../../assets/Icons/Frame-1.png'
import frame2 from '../../assets/Icons/Frame-2.png'
import frame3 from '../../assets/Icons/Frame-3.png'
import frame4 from '../../assets/Icons/Frame-4.png'
import { addToDb } from '../../utilities/fakeDB';

const JobDetails = () => {
    const {id} = useParams()
    const [jobInfo, setJobInfo] = useState(allData)
    const details = jobInfo.find(job=>job.id === id)
    const {educational_requirements, experience, job_responsibility, job_description, salary ,job_title, phone, email, address} = details

   

    const handleAppliedJobs = (id)=>{
        addToDb(id)
    }
    
    return (
        <>
        <div className='job-details-header'>
            <h2 className='job-details-header-title'>Job Details</h2>
        </div>
        <div className='job-details-section'>
            <div className='details-part'>
                <p><strong>Job Description:</strong>{job_description}</p>
                <p><strong>Job Responsibility:</strong>{job_responsibility}</p>
                <p><strong>Educational Requirements:</strong></p>
                <p>{educational_requirements}</p>
                <p><strong>Experiences:</strong></p>
                <p>{experience}</p>
            </div>
            <div className='apply-part'>
                <h2>Job Details</h2>
                <hr />
               <div className='flex-item'>
                    <img src={frame} alt="" />
                    <p><strong>Salary</strong>{salary}</p>
               </div>
                <div className='flex-item'>
                    <img src={frame1} alt="" />
                    <p><strong>Job Title :</strong>{job_title}</p>
                </div>
                <h2>Contact Information</h2>
                <hr />
                <div className='flex-item'>
                    <img src={frame2} alt="" />
                    <p><strong>Phone:</strong>{phone}</p>
                </div>
                <div className='flex-item'>
                    <img src={frame3} alt="" />
                    <p><strong>Email:</strong>{email}</p>
                </div>
               <div className='flex-item'>
                    <img src={frame4} alt="" />
                    <p><strong>Address:</strong>{address}</p>
               </div>
               <button onClick={()=>handleAppliedJobs(id)} className='apply-btn'>Apply Now</button>
            </div>
        </div>
        </>
    );
};

export default JobDetails;