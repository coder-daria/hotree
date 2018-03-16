//Dependencies
import React from "react";
//Custom
import SelectInput from "../../../components/select";
import TextInput from "../../../components/text";

class Coordinator extends React.Component {
  render() {
    return (
      <div>
        <SelectInput
          label="Responsible"
          options={["Pomarańcza", "Jabłko", "Kiwi"]}
        />
        <TextInput label="Email" text="Email" />
      </div>
    );
  }
}

export default Coordinator;
