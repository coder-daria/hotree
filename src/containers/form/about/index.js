//Dependencies
import React from "react";
//Custom
import Textarea from "../../../components/tags/textarea";
import SelectTemplate from "../../../components/tags/select";
import PaymentTemplate from "./paymentTemplate";
import Input from "../../../components/tags/input";

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
          name="title"
          label="Title"
          placeholder="Make it short and clear"
          isRequired={true}
        />
        <Textarea
          name="description"
          label="Description"
          placeholder="Write about your event, be creative"
          maxLength="140"
          isRequired={true}
        />
        <SelectTemplate
          name="category"
          label="Category"
          defaultValue="Select category (skills, interests, locations)"
          options={categories}
          additionalInfo="Describes topic and people who should be interested in this event"
        />
        <PaymentTemplate
          name="event"
          label="Payment"
          options={["Free event", "Paid event"]}
        />
        <Input
          type="number"
          pattern="\d+"
          name="reward"
          label="Reward"
          placeholder="Number"
          additionalInfo="reward points for attendance"
        />
      </div>
    );
  }
}

export default About;
