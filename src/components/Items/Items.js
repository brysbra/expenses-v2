import React from 'react';
import styled from 'styled-components';

import Item from './components/Item/Item';

const ItemWrapper = styled.div`
  padding-bottom: 1rem;
`

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      idOfItemRemoved: null,
      idOfItemAdded: null,
    }
  }


  componentDidUpdate(prevProps) {
    const prevItems = prevProps.items;
    const nextItems = this.props.items;
    if (prevItems.length > nextItems.length) {
      this.setState({
        idOfItemRemoved: this.findItemDiff(prevItems, nextItems)
      });
      setTimeout(() => {
        this.setState({
          idOfItemRemoved: null,
          items: nextItems
        })
      }, 400)
    }
    
    if (nextItems.length > prevItems.length) {
      console.log('is adding item');

      this.setState({
        idOfItemAdded: this.findItemDiff(nextItems, prevItems),
        items: nextItems
      });
      setTimeout(() => {
        this.setState({
          idOfItemAdded: null,  
        })
      }, 550)
    }
  }

  findItemDiff(itemsA, itemsB) {
    const diff = itemsA.filter(itemA => !itemsB.some(itemB => (itemB.id === itemA.id)));
    return diff.length > 0 ? diff[0].id : null;
  }

  determineAnimation(itemId) {
    const { idOfItemAdded, idOfItemRemoved } = this.state;
    if (itemId === idOfItemAdded) {
      return 'FADE_IN';
    } else if (itemId === idOfItemRemoved) {
      return 'FADE_OUT';
    } else {
      return null;
    }
  }


  render() {
    return(
      <div>
        {this.state.items.map((item) =>
          <ItemWrapper key={item.id}>
            <Item
              id={item.id}
              name={item.name}
              cost={item.cost}
              animation={this.determineAnimation(item.id)}
              onRemoveItem={this.props.onRemoveItem}
            ></Item>
          </ItemWrapper>
        )}
      </div>
    );
  }
}
 
export default Items;