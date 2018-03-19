//Dependencies
import React from "react";
//Custom
import DateTemplate from "./dateTemplate";
import Input from "../../../components/tags/input/other";
import InputTemplate from "../inputTemplate/index";

class When extends React.Component {
  render() {
    return (
      <div>
        <InputTemplate label="Starts on" content={<DateTemplate />} />
        <InputTemplate
          label="Duration"
          content={
            <Input
              type="number"
              name="when"
              text="Number"
              additionalInfo="hour"
            />
          }
        />
      </div>
    );
  }
}

export default When;
