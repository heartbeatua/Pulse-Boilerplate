import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from 'styled-system';
import Box from '../Box';

const flex = style({
  prop: 'width',
  cssProperty: 'flex',
  transformValue(n) {
    switch (n) {
      case 'auto':
        return '1 1 0%';
      case 'contains':
        return '0 0 auto';
      default:
        return `0 0 ${n * 100}%;`;
    }
  }
});
const StyledCol = styled(Box)`
  padding-left: ${({ gap }) => gap / 2}px;
  padding-right: ${({ gap }) => gap / 2}px;
  ${flex};
`;

const Col = props => <StyledCol {...props} />;

Col.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string
  ]),
  ...Box.propTypes
};

Col.defaultProps = {
  width: 'auto'
};

export default Col;
