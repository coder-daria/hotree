//Dependencies
import React from "react";
//Custom
import DateTemplate from "./dateTemplate";
import InputTemplate from "../../../components/tags/input/other";

class When extends React.Component {
  render() {
    return (
      <div>
        <DateTemplate />
        <InputTemplate
          type="number"
          label="Duration"
          name="when"
          text="Number"
          additionalInfo="hour"
        />
      </div>
    );
  }
}

export default When;
