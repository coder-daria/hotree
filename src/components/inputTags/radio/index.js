//Dependencies
import React from "react";
import PropTypes from "prop-types";
//Custom
import { FeeContainer } from "./styles";

class RadioInput extends React.PureComponent {
  state = {
    selectedOption: "Free event"
  };

  changeEvent(event) {
    const eventName = event.target.value;
    this.setState({
      selectedOption: eventName
    });
  }

  render() {
    const { label, options, name } = this.props;
    const { selectedOption } = this.state;
    const isVisible = selectedOption === "Paid event";
    return (
      <div>
        <label>{label}</label>
        {options.map(option => {
          return (
            <div key={option}>
              <input
                type="radio"
                name={name}
                value={option}
                checked={selectedOption === option}
                onChange={e => this.changeEvent(e)}
              />
              <label>{option}</label>
            </div>
          );
        })}
        <FeeContainer isVisible={isVisible}>
          <input
            type="number"
            placeholder="Fee"
            onChange={() => console.log("radio button")}
            required
          />
          <span>$</span>
        </FeeContainer>
      </div>
    );
  }
}

RadioInput.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

export default RadioInput;
