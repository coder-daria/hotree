//Dependencies
import React, { Component } from "react";
//Custom
import Form from "../form/formTemplate";
import About from "../form/about";
import Coordinator from "../form/coordinator";
// import When from "../form/when";
import { FormContainer } from "./styles";

const inputParsers = {
  date(input) {
    const [month, day, year] = input.split("/");
    return `${year}-${month}-${day}`;
  },
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  }
};

function stringifyFormData(fd) {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  console.log(JSON.stringify(data, null, 2))
  return JSON.stringify(data, null, 2);

}

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      this.setState({ displayErrors: true });
      return;
    }
    this.setState({ displayErrors: false });

    const form = event.target;
    const data = new FormData(form);


    // for (let name of data.keys()) {
    //   const input = form.elements[name];
    //   const parserName = input.dataset.parse;

    //   if (parserName) {
    //     const parser = inputParsers[parserName];
    //     const parsedValue = parser(data.get(name));
    //     data.set(name, parsedValue);
    //   }
    // }

    this.setState({
      res: stringifyFormData(data)
    });
  }

  render() {
    const { displayErrors } = this.state;
    return (
      <FormContainer
        id="form"
        onSubmit={this.handleSubmit}
        noValidate
        className={displayErrors ? "displayErrors" : ""}
      >
        <Form title="About" content={<About />} />
        <Form title="Coordinator" content={<Coordinator />} />
        <button type="submit">Submit</button>
      </FormContainer>
    );
  }
}

export default App;
// <Form title="When" content={<When />} />
