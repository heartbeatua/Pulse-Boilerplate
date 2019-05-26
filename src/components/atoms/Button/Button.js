import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { space, display, maxWidth, fontSize, themeGet } from 'styled-system';

const width = ({ wide }) => wide === 'true' && '100%';
const cursor = ({ disabled }) => (disabled ? 'not-allowed' : 'pointer');
const opacity = ({ disabled }) => disabled && '0.65';
const btnBg = ({ color, skin }) =>
  themeGet(skin === 'outline' ? `colors.white` : `colors.${color}`);
const btnColor = ({ color, skin }) =>
  themeGet(skin === 'fill' ? `colors.white` : `colors.${color}`);

const styles = css`
  ${display};
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  outline: none;
  user-select: none;
  transition: 0.1s ease;
  border-radius: 0;
  text-transform: lowercase;
  width: ${width};
  cursor: ${cursor};
  opacity: ${opacity};
  color: ${btnColor};
  background: ${btnBg};
  padding: 10px 23px;
  line-height: 1.5;
  ${space};
  ${fontSize};
  ${maxWidth};
  border: 1px solid ${({ color }) => themeGet(`colors.${color}`)};
  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        border-color: ${themeGet('colors.black')};
        background: ${({ color, skin }) =>
          themeGet(
            color === 'black' && skin === 'fill'
              ? 'colors.white'
              : 'colors.black',
          )};
        color: ${({ color, skin }) =>
          themeGet(
            color === 'black' && skin === 'fill'
              ? 'colors.black'
              : 'colors.white',
          )};
      }
    `};
`;

const StyledNavLink = styled(NavLink)`
  ${styles};
`;
const StyledLink = styled.a`
  ${styles};
`;
const StyledButton = styled.button`
  ${styles};
`;

const Button = ({ to, href, type, wide, disabled, ...rest }) => {
  const isWide = wide.toString();
  const DefaultBtn = (
    <StyledButton disabled={disabled} type={type} wide={isWide} {...rest} />
  );
  if (disabled) {
    return DefaultBtn;
  }
  if (to) {
    return <StyledNavLink to={to} wide={isWide} {...rest} />;
  }
  if (href) {
    return (
      <StyledLink
        href={href}
        rel="noopener noreferrer nofollow"
        target="_blank"
        wide={isWide}
        {...rest}
      />
    );
  }
  return DefaultBtn;
};

Button.propTypes = {
  color: PropTypes.oneOf(['brand', 'cta', 'black']),
  skin: PropTypes.oneOf(['fill', 'outline']),
  wide: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'button']),
  display: PropTypes.string,
  fontSize: PropTypes.string,
  ...space.propTypes,
  ...maxWidth.propTypes,
};

Button.defaultProps = {
  color: 'black',
  skin: 'fill',
  type: 'button',
  display: 'inline-block',
  fontSize: 's',
  disabled: false,
  wide: false,
};

export default Button;
