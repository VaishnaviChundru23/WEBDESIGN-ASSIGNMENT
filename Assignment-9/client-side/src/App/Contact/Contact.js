import React from "react";
import PageCard from "../../Components/PageCard/PageCard";
import "../Contact/Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import av1 from "../../Images/av1.png";
import av2 from "../../Images/av2.png";
import av3 from "../../Images/av3.png";
import av4 from "../../Images/av4.png";
import av5 from "../../Images/av5.png";
import av6 from "../../Images/av6.jpg";
import fb from "../../Images/facebook.jfif";
import insta from "../../Images/insta.jfif";
import twi from "../../Images/twitter.jfif";
import InfoCard from "../../Components/InfoCard/InfoCard";

const Contact = () => {
  var img = {
    borderRadius: "50%",
    width: "30px",
    height: "30px",
  };
  var desc = {
    width: "50%",
    color: "white",
    fontWeight: "500",
    marginLeft: "25%",
    paddingTop:"2rem"
  };

  const email = () =>{
    window.location.href = "mailto:abc@gmail.com";
  }

  const phone = () => {
    window.location.href = "tel:+1857-313-0000"
  }

  return (
    <div className="contactMain">
      <Navbar />
      <InfoCard
        title={"Contact Us"}
        desc={
          "Welcome to our Contact Us page! We're glad you're here and hope you find what you're looking for. Our organization values communication and we strive to make it easy for you to get in touch with us. Below you'll find information on how to reach us, as well as information on connecting with our board members and networking opportunities." }
      />
      <h1 style={{ color: "white", paddingTop: "3rem", paddingBottom: "3rem" }}>
        Our Board Members
      </h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <PageCard color="white" pic={av6} name="Rachel Green" designation="CEO"/>
        <PageCard color="black" pic={av4} name="Joey Tribiyani" designation="Manager"/>
        <PageCard color="white" pic={av5} name="Monica Geller" designation="HR Head"/>
      </div>

      <h1 style={{ color: "white", paddingTop: "5rem", paddingBottom: "3rem" }}>
        Our Support Staff
      </h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <PageCard color="black" pic={av1} name="John Doe" />
        <PageCard color="white" pic={av2} name="Jane Doe" />
        <PageCard color="black" pic={av3} name="Jacob Doe" />
      </div>

      <div style={desc}>
        <h3>24/7 Support</h3>
        <p>
          Please send us an email at <span onClick={email} style={{cursor:"pointer"}}>abc@gmail.com</span> with your concern so that we can follow up
          with you. Or call us at <span onClick={phone} style={{cursor:"pointer"}}>857-313-0000</span>, a 24/7 helpline support to
          assist with any queries.
        </p>
      </div>
      <div className="footer">
        <h4 style={{color:"white"}}>Follow us on social media</h4>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={fb} alt="facebook" style={img} />
        </a>
        <a href="https://www.instagram.com/accounts/login" target="_blank">
          <img src={insta} alt="instagram" style={img} />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <img src={twi} alt="twitter" style={img} />
        </a>
        <br/>
        <br/>
      </div>
    </div>
  );
};

export default Contact;
