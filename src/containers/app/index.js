//Dependencies
import React, { Component } from "react";
//Custom
import Form from "../form/index";
import About from "../form/about";
import Coordinator from "../form/coordinator";
import When from "../form/when";

class App extends Component {
  render() {
    return (
      <div>
        <Form title="About" content={<About />} />
        <Form title="Coordinator" content={<Coordinator />} />
        <Form title="When" content={<When />} />
      </div>
    );
  }
}

export default App;
