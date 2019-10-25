import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const fadeOut = keyframes`
  from { opacity: 1 }
  to { opacity: 0 }
`;

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const StyledItem = styled.div`
  border: 3px solid #09d3ac;
  padding: 1rem;
  position: relative;

  ${props => props.animation === "FADE_OUT" && css`
    animation: ${fadeOut} 300ms linear forwards;
  `}

  ${props => props.animation === "FADE_IN" && css`
    animation: ${fadeIn} 400ms linear forwards;
  `}
`

const ItemRemove = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 10px;
  padding-top: 5px;
  cursor: pointer;
`;

const ItemTitle = styled.span`
  font-weight: bold;
`;

class Item extends React.Component {
  render() {
    const { id, name, cost, animation, onRemoveItem } = this.props;
    return (
      <StyledItem animation={animation}>
        <ItemRemove onClick={() => onRemoveItem(id)}>❌</ItemRemove>
        <div><ItemTitle className="ItemTitle">Name: </ItemTitle>{name}</div>
        <div><ItemTitle className="ItemTitle">Cost: </ItemTitle>{cost}</div>
      </StyledItem>
    );
  }
}
 
export default Item;