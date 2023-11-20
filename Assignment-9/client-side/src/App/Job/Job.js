import React, { useEffect, useState } from "react";
import "../Job/Job.css";
import Navbar from "../../Components/Navbar/Navbar";
import InfoCard from "../../Components/InfoCard/InfoCard";
import jobList from "./jobList.json";

const Job = () => {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
   
      setJobs(jobList);
  }, []);

  return (
    <div className='jobMain'>
      <Navbar/>
      <InfoCard
        title={"Job Search"}
        desc={
          "Welcome to our job search page, dedicated to helping master students. As a master student, you have invested a significant amount of time and effort into acquiring specialized skills and knowledge in your field. Our platform is designed to connect you with top employers who recognize the value of your expertise and are looking for candidates like you. We are committed to helping you find your dream job and achieve your career goals. Join our platform today and take the first step towards a successful and rewarding career."
        }
      />
      <div className="jobSearchPage">
      <h1>Job Openings for Master Students in IT, Software, Cloud, and Electronics</h1>
      <div className="jobList">
        {jobs.map((job) => (
          <div className="jobCard" key={job.id}>
            <h2 style={{color:'orangered'}}>{job.title}</h2>
            <h3>{job.company}</h3>
            <p className="jobDesc">{job.description}</p>
            <p style={{textDecoration:"underline"}}>Location: {job.location}</p>
            <p className="salary">Salary: {job.salary}</p>
            <button className="applynow">Apply now</button>
          </div>
          
        ))}
      </div>
      
    </div>
    </div>
  )
}

export default Job