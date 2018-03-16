//Dependencies
import React from "react";
//Custom
import Date from "../../../components/date";
import Text from "../../../components/text";

class When extends React.Component {
  render() {
    return (
      <div>
        <Date label="Starts on" />
        <Text label="Duration" text="Number" additionalInfo="hour" />
      </div>
    );
  }
}

export default When;
