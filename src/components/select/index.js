import React from "react";

const SelectInput = props => {
  const { label, options } = props;
  return (
    <div>
      <label>{label}</label>
      <select onChange={ (e) => console.log(e)}>
        {options.map(option => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
