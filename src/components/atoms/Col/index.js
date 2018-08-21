import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import { style, themeGet } from 'styled-system';

const flex = style({
  prop: 'width',
  cssProperty: 'flex',
  transformValue(n) {
    const isAuto = n === 'auto';
    return `${isAuto ? 1 : 0} 0 ${isAuto ? 0 : n * 100}%;`;
  }
});
const StyledCol = styled(Box)`
  ${flex};
  padding-left: ${({ gap }) => themeGet(`space.${gap}`)}px;
  padding-right: ${({ gap }) => themeGet(`space.${gap}`)}px;
`;

const Col = props => <StyledCol {...props} />;

Col.propTypes = {
  width: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  )
};

Col.defaultProps = {
  width: ['auto']
};

export default Col;
