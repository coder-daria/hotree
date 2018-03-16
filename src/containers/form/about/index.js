//Dependencies
import React from "react";
//Custom
import Textarea from "../../../components/textarea";
import SelectInput from "../../../components/select";
import RadioInput from "../../../components/radio";
import TextInput from "../../../components/text";

class About extends React.Component {
  render() {
    return (
      <div>
        <TextInput label="Title" text="Make it short and clear" />
        <Textarea
          label="Description"
          text="Write about your event, be creative"
        />
        <SelectInput
          label="Category"
          options={["Pomarańcza", "Jabłko", "Kiwi"]}
        />
        <RadioInput
          label="Payment"
          options={["Free event", "Paid event"]}
          name="event"
        />
        <div>
          <TextInput
            label="Reward"
            text="Number"
            additionalInfo="reward points for attendance"
          />
        </div>
      </div>
    );
  }
}

export default About;
