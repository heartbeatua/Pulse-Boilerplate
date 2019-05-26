import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { width, height, themeGet, space } from 'styled-system';
import tag from 'clean-tag';

const StyledInput = styled(tag.input)`
  ${width};
  ${height};
  ${space};
  display: inline-block;
  vertical-align: middle;
  border: 0;
  padding: 0;
  border-bottom: 1px solid;
  background: ${themeGet('colors.white')};
  outline: 0;
  -webkit-appearance: none;
  border-radius: 0;
  line-height: normal;
  font-size: ${themeGet('fontSizes.m')}px;
`;

const InputField = props => <StyledInput {...props} />;

InputField.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
  height: PropTypes.string,
};
InputField.defaultProps = {
  width: '100%',
  height: '42px',
};

export default InputField;
