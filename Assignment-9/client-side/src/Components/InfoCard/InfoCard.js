import React from "react";
import "../InfoCard/InfoCard.css";
import TypingParagraph from "./typingpara";

const InfoCard = ({ title, desc }) => {
  return (
    <div className="Container">
      <div className="titleTag">{title}</div>
      <div style={{width:"50%", marginLeft:"25%"}}><TypingParagraph text={desc}/></div>
    </div>
  );
};

export default InfoCard;