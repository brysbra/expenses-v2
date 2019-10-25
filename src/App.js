import React from 'react';
import styled from 'styled-components';

import Items from './components/Items/Items';
import AddItem from './components/AddItem/AddItem';

const StyledApp = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledColumn = styled.div`
  width: 50%;
  padding: 5rem;
`

const StyledSection = styled.div`
  padding-top: 2rem;
  padding-left: 1rem;
  padding-bottom: 2rem;
`;

const StyledHeader = styled.div`
  color: #09d3ac;
  font-size: 3rem;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
      items: [],
    };

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleAddItem(item) {
    this.setState({
      items: [
        ...this.state.items,
        item
      ]
    })
  }

  handleRemoveItem(itemId) {
    this.setState({
      items: this.state.items.filter((item) => item.id !== itemId)
    })
  }

  calculateSum() {
    const costValues = this.state.items.map(item => item.cost);
    const sum = costValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
  }

  render() {
    return (
      <StyledApp>
        <StyledColumn>
          <StyledHeader>Add Expense</StyledHeader>
          <StyledSection>
            <AddItem onAddItem={this.handleAddItem}></AddItem>
          </StyledSection>
          <StyledHeader>Stats</StyledHeader>
          <StyledSection>
            <div>Sum: {this.calculateSum()}</div>
            <div>Count: {this.state.items.length}</div>
          </StyledSection>
        </StyledColumn>
        <StyledColumn>
          <Items
            items={this.state.items}
            onRemoveItem={this.handleRemoveItem}
          ></Items>
        </StyledColumn>
      </StyledApp>
    );
  }
}

export default App;
