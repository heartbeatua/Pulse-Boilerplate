import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { style, top } from 'styled-system';
import ColBox from '../ColBox';

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
  },
});

const StyledCol = styled(ColBox)`
  position: relative;
  ${flex};
  ${top};
  padding-left: ${({ gap }) => (gap ? `${gap / 2}px` : null)};
  padding-right: ${({ gap }) => (gap ? `${gap / 2}px` : null)};
`;

const Col = props => <StyledCol {...props} />;

Col.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
  ...ColBox.propTypes,
};

Col.defaultProps = {
  width: 'auto',
};

export default Col;
