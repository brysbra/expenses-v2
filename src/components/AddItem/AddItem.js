import React from 'react';
import styled from 'styled-components';
import uuid from 'uuidv4';

import Input from '../Input/Input';

const Container = styled.div`
  margin-bottom: 1rem;
`;

const SubmitButton = styled.input`
  font-size: 2rem;
`;

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cost: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'Name') {
      this.setState({ name: event.target.value });
    }
    if (event.target.name === 'Cost') {
      this.setState({ cost: event.target.value });
    }
  }

  handleSubmit(event) {
    const { name, cost } = this.state;

    if (name.length && cost.length) {
      const newItem = {
        id: uuid(),
        name,
        cost: Number(cost)
      };
      this.props.onAddItem(newItem);

      this.setState({
        name: '',
        cost: '',
      });
    }

    // Prevents actual submit - would refresh page
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Container>
          <Input
            name="Name"
            value={this.state.name}
            handleChange={this.handleChange}
            />
        </Container>
        <Container>
          <Input
            name="Cost"
            value={this.state.cost}
            handleChange={this.handleChange}
            />
        </Container>
        <SubmitButton type="submit" value="Add" />
      </form>
    )
  }
}

export default AddItem;
