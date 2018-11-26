import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { space, maxWidth, themeGet } from 'styled-system';
import tag from 'clean-tag';

const width = ({ wide }) => (wide ? '100%' : null);
const cursor = ({ disabled }) => (disabled ? 'not-allowed' : 'pointer');
const opacity = ({ disabled }) => (disabled ? '0.65' : null);
const btnBg = ({ color, skin }) =>
  themeGet(skin === 'outline' ? `colors.white` : `colors.${color}`);
const btnColor = ({ color, skin }) =>
  themeGet(skin === 'fill' ? `colors.white` : `colors.${color}`);

const padding = props => {
  const { kind } = props;
  switch (kind) {
    case 'target':
      return '94px 25px';
    default:
      return '10px 23px 11px';
  }
};
const fontSize = props => {
  const { kind } = props;
  switch (kind) {
    case 'target':
      return 'fontSizes.heading.h3';
    default:
      return 'fontSizes.m';
  }
};
const lineHeight = props => {
  const { kind } = props;
  switch (kind) {
    case 'target':
      return 'lineHeights.heading.h3';
    default:
      return '';
  }
};

const styles = css`
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  outline: none;
  user-select: none;
  transition: 0.1s ease;
  padding: ${padding};
  border-radius: 0;
  width: ${width};
  cursor: ${cursor};
  opacity: ${opacity};
  color: ${btnColor};
  background: ${btnBg};
  border: 1px solid ${({ color }) => themeGet(`colors.${color}`)};
  font-size: ${props => themeGet(fontSize(props))}px;
  line-height: ${props => themeGet(lineHeight(props))};
  font-weight: ${({ kind }) => (kind === 'target' ? 'bold' : null)};
  ${({ disabled }) =>
    !disabled
      ? css`
          &:hover {
            border-color: ${themeGet('colors.black')};
            background: ${({ color, skin }) =>
              themeGet(
                color === 'black' && skin === 'fill'
                  ? 'colors.white'
                  : 'colors.black'
              )};
            color: ${({ color, skin }) =>
              themeGet(
                color === 'black' && skin === 'fill'
                  ? 'colors.black'
                  : 'colors.white'
              )};
          }
        `
      : null};
  ${space};
  ${maxWidth};
`;

const StyledNavLink = styled(NavLink)`
  ${styles};
`;
const StyledLink = styled(tag.a)`
  ${styles};
`;
const StyledButton = styled(tag.button)`
  ${styles};
`;

const Button = ({ to, href, type, wide, ...rest }) => {
  if (to) {
    return <StyledNavLink to={to} wide={wide ? 1 : 0} {...rest} />;
  }
  if (href) {
    return <StyledLink href={href} wide={wide ? 1 : 0} {...rest} />;
  }
  return <StyledButton wide={wide ? 1 : 0} type={type} {...rest} />;
};

Button.propTypes = {
  ...space.propTypes,
  ...maxWidth.propTypes,
  color: PropTypes.oneOf(['brand', 'cta', 'black']),
  size: PropTypes.oneOf(['m']),
  skin: PropTypes.oneOf(['fill', 'outline']),
  kind: PropTypes.oneOf(['normal', 'target']),
  wide: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button'])
};

Button.defaultProps = {
  color: 'black',
  size: 'm',
  skin: 'fill',
  kind: 'normal',
  type: 'button'
};

export default Button;
