//Dependencies
import React from "react";
import PropTypes from "prop-types";
//Custom
import InputTemplate from "../../../../components/tags/input/other";
import RadioInputs from "../../../../components/tags/input/radio";

class DateTemplate extends React.Component {
  state = {
    midday: "AM"
  };

  changeEvent(event) {
    this.setState({
      midday: event.target.value
    });
  }

  render() {
    return (
      <div>
        <label>Starts on</label>
        <div>
          <InputTemplate type="date" name="date" isRequired={true} />
          <span>at</span>
          <InputTemplate type="time" name="time" isRequired={true} />
          <RadioInputs
            name="midday"
            options={["AM", "PM"]}
            defaultChecked="AM"
            onChange={e => this.changeEvent(e)}
          />
        </div>
      </div>
    );
  }
}

export default DateTemplate;
