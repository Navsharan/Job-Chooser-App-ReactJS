import React from "react";
import "./DistanceAndRate.css";

const DistanceAndRate = props => {
  return (
    <div className="distance-and-rate">
      <div className="distance">
        Distance
        <div className="distance-value">{props.distance.toFixed(2)} miles</div>
      </div>

      <div className="hourly-rate">
        Hourly Rate
        <div className="rate-value">${(props.rate / 100).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default DistanceAndRate;
