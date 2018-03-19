//Dependencies
import React from "react";
//Custom
import Textarea from "../../../components/tags/textarea";
import SelectTemplate from "../../../components/tags/select";
import PaymentTemplate from "./paymentTemplate";
import Input from "../../../components/tags/input/other";
import InputTemplate from "../inputTemplate/index";

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
        <InputTemplate
          label="Title"
          content={
            <Input
              type="text"
              name="title"
              placeholder="Make it short and clear"
              isRequired={true}
            />
          }
        />
        <InputTemplate
          label="Description"
          content={
            <Textarea
              name="description"
              placeholder="Write about your event, be creative"
              maxLength="140"
              isRequired={true}
            />
          }
        />
        <InputTemplate
          label="Category"
          content={
            <SelectTemplate
              name="category"
              additionalInfo="Describes topic and people who should be interested in this event"
              defaultValue="Select category (skills, interests, locations)"
              options={categories}
              defaultOption="Select category (skills, interests, locations)"
            />
          }
        />
        <InputTemplate label="Payment" content={<PaymentTemplate />} />
        <InputTemplate
          label="Reward"
          content={
            <Input
              type="number"
              additionalInfo="reward points for attendance"
              pattern="\d+"
              name="reward"
              placeholder="Number"
            />
          }
        />
      </div>
    );
  }
}

export default About;
