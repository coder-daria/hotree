//Dependencies
import React from "react";

const radioInputs = props => {
  const { options, name, defaultChecked, onChange } = props;
  return (
    <div>
      {options.map(option => {
        return (
          <div key={option}>
            <label>
              <input
                type="radio"
                name={name}
                value={option}
                onChange={e => onChange(e)}
                defaultChecked={defaultChecked === option}
                required
              />
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default radioInputs;
