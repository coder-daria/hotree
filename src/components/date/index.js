//Dependencies
import React from "react";
import PropTypes from "prop-types";
//Custom
import RadioInput from "../radio";

const Date = props => {
  const { label } = props;
  return (
    <div>
      <label>{label}</label>
      <input type="date" onChange={() => console.log("date")} />
      <span>at</span>
      <input type="time" onChange={() => console.log("time")} />
      <RadioInput options={["AM", "PM"]} name="time" />
    </div>
  );
};

Date.propTypes = {
  label: PropTypes.string.isRequired
};

export default Date;
