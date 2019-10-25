import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Field = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledInput = styled.input`
  height: 2rem;
  font-size: 1.5rem;
`;

const InputLabel = styled.label`
  width: 5em;
`;

class Input extends React.Component {
  render() {
    return (
      <Field>
        <InputLabel htmlFor={this.props.name}>
          {this.props.name}
        </InputLabel>
        <StyledInput
          name={this.props.name}
          className="Input"
          type="text"
          value={this.props.value}
          onChange={e => this.props.handleChange(e)}
        ></StyledInput>
      </Field>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
};

Input.defaultProps = {
  name: '',
  value: '',
  handleChange: () => {},
};

export default Input;
