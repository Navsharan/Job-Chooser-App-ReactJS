import React from "react";
import "./CompanyJobDetails.css";

const CompanyJobDetails = props => {
  return (
    <div className="company-job-details">
      <div className="job-title">{props.jobTitle}</div>
      <div className="company-name">{props.companyName}</div>
    </div>
  );
};

export default CompanyJobDetails;
