/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCart from '../JobCart/JobCart';

const AppliedJobs = () => {
    const data = useLoaderData();
    let appledJobs = data.initialCart;
    const {remoteJobs, setRemoteJobs} = useState(false)
    const {onsiteJobs, setOnsiteJobs} = useState(false)
    const AllRemoteJobs = appledJobs.filter(job=>job.job_type1 === "Remote")
    const AllOnsiteJobs = appledJobs.filter(job=>job.job_type1 === "Onsite")
    if(remoteJobs){
        appledJobs = AllRemoteJobs;
        setOnsiteJobs(false)
    }
    if(onsiteJobs){
        appledJobs = AllOnsiteJobs
        setOnsiteJobs(false)
    }
    return (
        <>
        <div className='job-details-header'>
            <h2 className='job-details-header-title'>Applied Jobs</h2>
        </div>
          <div style={{ textAlign:"end", paddingRight:"10%", marginTop:"10px"}}>
            <h3>Filter By</h3>
            <div>
                <button onClick={()=>setRemoteJobs(!remoteJobs)} style={{cursor:"pointer"}}>Remote Jobs</button>
                <button onClick={()=>setOnsiteJobs(!remoteJobs)} style={{cursor:"pointer", marginLeft:"10px" }}>Onsite Jobs</button>
            </div>
          </div>
        {
            appledJobs? (appledJobs.map(job=><JobCart 
                                key={job.id}
                                job={job}
                                ></JobCart>)):<div>Loading...</div>
        }
        </>
    );
};

export default AppliedJobs;