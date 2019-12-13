import React from "react";
import "./Header.css";

const header = props => {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div className="user-name">
        {props.firstName} {props.lastName}
      </div>
    </div>
  );
};

export default header;
