import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import tag from 'clean-tag';

const StyledInput = styled(tag.input)`
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  height: 42px;
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

export default InputField;
