/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header/Header';
import JobCategories from '../JobCategories/JobCategories';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const allData = useLoaderData();
  const feturedJobs = allData.allJobs;
    return (
        <div>
          <Header></Header>
          <JobCategories></JobCategories>
          <FeaturedJobs feturedJobs={feturedJobs}></FeaturedJobs> 
        </div>
    );
};

export default Home;