//Dependencies
import React from "react";
//Custom
import Input from "../../../../components/tags/input/other";
import RadioInputs from "../../../../components/tags/input/radio";
import { Container, FeeContainer } from "./styles";

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
        <label>Payment</label>
        <div>
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
            <span>$</span>
          </FeeContainer>
        </div>
      </Container>
    );
  }
}

export default PaymentTemplate;
