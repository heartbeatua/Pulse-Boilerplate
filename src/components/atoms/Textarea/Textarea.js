import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet, height, space } from 'styled-system';
import tag from 'clean-tag';

const StyledTextarea = styled(tag.textarea)`
  vertical-align: top;
  width: 100%;
  ${height};
  ${space};
  border: 0;
  border-bottom: 1px solid;
  background: ${themeGet('colors.white')};
  outline: 0;
  -webkit-appearance: none;
  border-radius: 0;
  font-size: ${themeGet('fontSizes.m')}px;
  resize: none;
`;

const Textarea = props => <StyledTextarea {...props} />;

Textarea.propTypes = {
  height: PropTypes.string,
  p: PropTypes.string,
};
Textarea.defaultProps = {
  height: '120px',
  p: '13px 0',
};

export default Textarea;
