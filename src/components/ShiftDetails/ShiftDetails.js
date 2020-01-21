import React from "react";
import "./ShiftDetails.css";

const ShiftDetails = props => {
  return (
    <div className="shift-details">
      Shift Dates
      {props.shiftsDates.map(shift => {
        const dateOptions = {
          month: "short",
          day: "numeric",
          weekday: "short"
        };
        const timeOptions = {
          timeZone: "UTC",
          hour: "2-digit",
          minute: "2-digit"
        };
        const startdate = new Date(shift.startDate);
        const enddate = new Date(shift.endDate);
        return (
          <div className="shift-dates">
            <div className="shift-time">
              {new Intl.DateTimeFormat("en-US", dateOptions).format(startdate) +
                ", " +
                startdate.toLocaleString("en-US", timeOptions) +
                " - " +
                enddate.toLocaleString("en-US", timeOptions)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShiftDetails;
