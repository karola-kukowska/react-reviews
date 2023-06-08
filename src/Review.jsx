import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import user from "./assets/user.svg";

const Review = ({ id, name, job, image, text }) => {
  return (
    <div>
      <div className="img-container">
        <img src={image || user} alt={name} className="person-img"></img>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
    </div>
  );
};

export default Review;
