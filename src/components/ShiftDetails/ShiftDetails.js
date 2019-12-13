import React from "react";
import "./ShiftDetails.css";

const ShiftDetails = props => {
  return (
    <div className="shift-details">
      Shift Dates
      <div className="shift-dates">
        {props.shiftsDates.map(shift => {
          return shift.startDate;
        })}
      </div>
    </div>
  );
};

export default ShiftDetails;
