//Dependencies
import React from "react";
//Custom
import Select from "../../../components/tags/select";
import Input from "../../../components/tags/input/other";
import InputTemplate from "../inputTemplate";

const employers = [
  {
    id: 0,
    name: "Daniel",
    lastname: "Mitchell",
    email: "daniel.mitchell@hussa.rs"
  },
  {
    id: 1,
    name: "Albert",
    lastname: "Alexander",
    email: "albert.alexander@hussa.rs"
  },
  {
    id: 2,
    name: "Philip",
    lastname: "Hughes",
    email: "philip.hughes@hussa.rs"
  },
  {
    id: 3,
    name: "Walter",
    lastname: "Nelson",
    email: "walter.nelson@hussa.rs"
  },
  {
    id: 4,
    name: "Ashley",
    lastname: "Hernandez",
    email: "ashley.hernandez@hussa.rs"
  },
  {
    id: 5,
    name: "Donna",
    lastname: "Washington",
    email: "donna.washington@hussa.rs"
  },
  {
    id: 6,
    name: "Andrew",
    lastname: "White",
    email: "andrew.white@hussa.rs"
  },
  {
    id: 7,
    name: "Sharon",
    lastname: "Allen",
    email: "sharon.allen@hussa.rs"
  },
  {
    id: 8,
    name: "Russell",
    lastname: "Parker",
    email: "russell.parker@hussa.rs"
  },
  {
    id: 9,
    name: "Janet",
    lastname: "Stewart",
    email: "janet.stewart@hussa.rs"
  }
];

class Coordinator extends React.Component {
  render() {
    const me = `${employers[4].name} ${employers[4].lastname}`;
    return (
      <div>
        <InputTemplate
          label="Responsible"
          content={
            <Select
              name="responsible"
              defaultValue={me}
              options={employers}
              isRequired={true}
            />
          }
        />
        <InputTemplate
          label="Email"
          content={
            <Input 
              type="email" 
              name="email" 
              placeholder="Email"
            />
          }
        />
      </div>
    );
  }
}

export default Coordinator;
