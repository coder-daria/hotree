//Dependencies
import React from "react";
import PropTypes from "prop-types";
//Custom
import Input from "../../../../components/tags/input";
import { Container, Content, Label, FeeContainer } from "./styles";

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
    const { label, name, options } = this.props;
    const { selectedOption } = this.state;
    const isVisible = selectedOption === "Paid event";
    return (
      <Container>
        <label>{label}</label>
        {options.map(option => {
          return (
            <Content key={option}>
              <Label>
                <input
                  type="radio"
                  name={name}
                  value={option}
                  onChange={e => this.changeEvent(e)}
                  defaultChecked={"Free event" === option}
                  required
                />
                {option}
              </Label>
            </Content>
          );
        })}
        <FeeContainer isVisible={isVisible}>
          <Input
            name="fee"
            type="number"
            placeholder="Fee"
            isRequired={isVisible}
          />
          <span>$</span>
        </FeeContainer>
      </Container>
    );
  }
}

PaymentTemplate.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array.isRequired
};

export default PaymentTemplate;
