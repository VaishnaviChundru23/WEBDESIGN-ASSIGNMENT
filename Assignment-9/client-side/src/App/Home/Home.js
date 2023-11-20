import React from "react";
import "../Home/Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";

const Home = () => {
  return (
    <div className="homeMain">
      <Navbar />
      <div className="homeDiv">
        <h1 className="head fade-and-rotate">Job Search</h1>
        <h4 style={{ color: "white" }}>
        Welcome to our job search website, designed specifically for graduate students who are looking for exciting career opportunities.
        </h4>
        <h4>
        We are proud to have a team of experienced board members who bring a wealth of knowledge and expertise to the table. Our board members are committed to ensuring that you have access to the best job opportunities and career advice.
        </h4>
        <h4>
        We understand that searching for a job can be a daunting task, which is why we have a 24/7 online support staff available to answer any questions you may have. Whether you need help with your resume or advice on negotiating your salary, our support staff is always here to help.
        </h4>
        <h4>
        Our website features a comprehensive list of job openings from some of the top employers in the country. With new jobs being added every day, you can be sure to find the perfect job that matches your skills and interests. 
        </h4>
        <button className="homebtn">Get Started</button>
      </div>
      <div style={{display:"flex", justifyContent:"space-around", paddingBottom:"5rem"}}>
        <Card heading="Upload Resume"/>
        <Card heading="Upload Cover Letter"/>
      </div>
      <div className="logout">
        <Link to="/Login">
          <button>Logout</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Home;
