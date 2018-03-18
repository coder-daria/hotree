//Dependencies
import React from "react";
//Custom
import SelectInput from "../../../components/inputTags/select";
import TextInput from "../../../components/inputTags/textOrNumber";

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
