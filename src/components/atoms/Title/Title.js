import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  themeGet,
  space,
  fontWeight,
  display,
  fontFamily,
} from 'styled-system';
import tag from 'clean-tag';

const spaceDefault = ({ mb = 'l', mt = 0, m, ...rest }) =>
  m === undefined ? { mt, mb, ...rest } : { m, ...rest };

const StyledTitle = styled(tag)`
  line-height: ${({ size }) => themeGet(`lineHeights.heading.${size}`)};
  font-size: ${({ size }) => themeGet(`fontSizes.heading.${size}`)}px;
  ${props => space(spaceDefault(props))};
  ${fontWeight};
  ${display};
  ${fontFamily};
`;

const Title = props => <StyledTitle {...props} />;

Title.propTypes = {
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontFamily: PropTypes.oneOf(['heading', 'bodyText']),
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div']),
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  ...space.propTypes,
  ...display.propTypes,
};
Title.defaultProps = {
  as: 'h2',
  size: 'h2',
  fontWeight: 'bold',
  fontFamily: 'heading',
};

export default Title;
