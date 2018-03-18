//Dependencies
import React from "react";
//Custom
import Textarea from "../../../components/inputTags/textarea";
import SelectInput from "../../../components/inputTags/select";
import RadioInput from "../../../components/inputTags/radio";
import Input from "../../../components/inputTags/textOrNumber";

const categories = [
  {
    id: 0,
    name: "Cycling"
  },
  {
    id: 1,
    name: "Hiking"
  },
  {
    id: 2,
    name: "Cooking"
  },
  {
    id: 3,
    name: "Rock climbing"
  },
  {
    id: 4,
    name: "Yoga"
  },
  {
    id: 5,
    name: "Fencing"
  },
  {
    id: 6,
    name: "Swimming"
  },
  {
    id: 7,
    name: "Badminton"
  },
  {
    id: 8,
    name: "Running"
  },
  {
    id: 9,
    name: "Dance"
  }
];

class About extends React.PureComponent {
  render() {
    return (
      <div>
        <Input
          type="text"
          label="Title"
          text="Make it short and clear"
          isRequired={true}
        />
        <Textarea
          label="Description"
          text="Write about your event, be creative"
          isRequired={true}
          maxLength="140"
        />
        <SelectInput
          label="Category"
          options={categories}
          additionalInfo="Describes topic and people who should be interested in this event"
        />
        <RadioInput
          label="Payment"
          options={["Free event", "Paid event"]}
          name="event"
        />
        <Input
          type="number"
          label="Reward"
          text="Number"
          additionalInfo="reward points for attendance"
        />
      </div>
    );
  }
}

export default About;
