import React from "react";
import "./LocationDetails.css";

const LocationDetails = props => {
  return (
    <div className="location-details">
      Location
      <div className="location-name">{props.locationDetails}</div>
      <div className="location-distance">
        {props.distance.toFixed(2)} miles from your job search location
      </div>
    </div>
  );
};

export default LocationDetails;
