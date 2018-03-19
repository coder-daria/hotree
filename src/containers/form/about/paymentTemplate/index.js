//Dependencies
import React from "react";
//Custom
import Input from "../../../../components/tags/input/other";
import RadioInputs from "../../../../components/tags/input/radio";
import { Container, FeeContainer, Span } from "./styles";

class PaymentTemplate extends React.PureComponent {
  state = {
    selectedOption: "Free event"
  };

  changeEvent(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  render() {
    const { selectedOption } = this.state;
    const isVisible = selectedOption === "Paid event";
    return (
      <Container>
        <RadioInputs
          name="payment"
          options={["Free event", "Paid event"]}
          defaultChecked="Free event"
          onChange={e => this.changeEvent(e)}
        />
        <FeeContainer isVisible={isVisible}>
          <Input
            name="fee"
            type="number"
            placeholder="Fee"
            isRequired={isVisible}
          />
          <Span>$</Span>
        </FeeContainer>
      </Container>
    );
  }
}

export default PaymentTemplate;
