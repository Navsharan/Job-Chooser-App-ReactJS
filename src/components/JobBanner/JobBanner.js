import React from "react";
import "./JobBanner.css";

const JobBanner = props => {
  return <img className="job-banner" src={props.imageSrc}></img>;
};

export default JobBanner;
