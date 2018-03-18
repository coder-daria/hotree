//Dependencies
import React, { Component } from "react";
//Custom
import Form from "../form/formTemplate";
import About from "../form/about";
// import Coordinator from "../form/coordinator";
// import When from "../form/when";

class App extends Component {
  validateForm(e) {
    e.preventDefault();
    const x = document.getElementById("form").elements[0].value;
    return true;
  }

  render() {
    return (
      <form id="form" onSubmit={(e)=> this.validateForm(e)}>
        <Form title="About" content={<About />} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default App;

// <Form title="Coordinator" content={<Coordinator />} />
// <Form title="When" content={<When />} />
