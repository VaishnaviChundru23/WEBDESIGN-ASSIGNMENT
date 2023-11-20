import React, { useEffect, useState } from "react";
import axios from "axios";
import "../About/About.css";
import Navbar from "../../Components/Navbar/Navbar";
import InfoCard from "../../Components/InfoCard/InfoCard";
import abt1 from "../../Images/abt1.jpg";
import abt2 from "../../Images/abt2.jpg";
import abt3 from "../../Images/abt3.jpg";
import abt4 from "../../Images/abt4.jpg";
import abt5 from "../../Images/abt5.jpg";
import abt6 from "../../Images/abt6.jpg";
import infy from "../../Images/Infosys_logo.png"
import amazon from "../../Images/Amazon-Logo.png"
import apple from "../../Images/Apple-Logo.png"
import fb from "../../Images/Facebook-logo.png"
import google from "../../Images/Google_logo.png"
import tesla from "../../Images/tesla-logo.jpg"

const About = () => {

  const [users, setusers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:8080/user/getAll");
      // console.log(data.data);
      setusers(data.data);

    };
    getData();
  }, []);

  const comp = {
    "Name1": "Infosys",
    "Name2": "Apple",
    "Name3": "Deloite",
    "Name4": "Amazon",
    "Name5": "Google",
    "Name6": "Telsa"
  };

  const pic = {
    "Name1": abt1,
    "Name2": abt2,
    "Name3": abt3,
    "Name4": abt4,
    "Name5": abt5,
    "Name6": abt6
  }
  
  return (
    <div className="aboutMain">
      <div>
        <Navbar />
      </div>
      <img src={infy} width="60" height="50" alt="" className="infy"/>
      <img src={amazon} width="60" height="50" alt="" className="amazon"/>
      <img src={apple} width="60" height="55" alt="" className="apple"/>
      <InfoCard
        title={"About Us"}
        desc={
          "Welcome to our About Us page! We're excited to tell you a little bit about our organization and what we stand for.Our organization was founded in 2020 by Dr. Ross Geller with the goal of helping students to get placed in good companies . Since then, we have grown and expanded.We are proud of our accomplishments thus far, and helped the following students. However, we know that there is always more work to be done. We are constantly seeking new ways and we are excited about the future."
        }
      />

      <img src={google} width="50" height="50" alt=""className="google"/>
      <img src={fb} width="100" height="60" alt="" className="fb"/>
      <img src={tesla} width="50" height="50" alt=""className="tesla"/>
      <div className="cardContainer">
        {users.map((element) => (
            <UserCard key={element._id} email={element.email} name={element.fullName} company={comp[element.fullName]} image={pic[element.fullName]}/>
        ))}
     
      </div>
    </div>
  );
};

const UserCard = ({ email, name, company, image }) => {
  return (
    <div className="card">
      <img src={image} alt=""/>
      <div className="details">
        <span className="span">Name -</span> {name} <br />
      <span className="span">Email -</span> {email} <br/>
      <span className="span">Company -</span> {company}
      </div>
      
    </div>
  );
};

export default About;