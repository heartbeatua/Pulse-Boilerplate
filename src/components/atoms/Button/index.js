import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const paletteColor = ({ theme, palette }) => theme.palette[palette];
const width = ({ wide }) => (wide ? '100%' : null);
const cursor = ({ disabled }) => (disabled ? 'not-allowed' : 'pointer');
const font = ({ theme }) => theme.font.primary;
const opacity = ({ disabled }) => (disabled ? '0.65' : null);
const bg = ({ skin }) => (skin === 'fill' ? paletteColor : '#fff');
const color = ({ skin }) => (skin === 'fill' ? '#fff' : paletteColor);
const fontSize = ({ size }) => {
  let value = 1;
  switch (size) {
    case 's':
      value -= 0.2;
      break;
    case 'l':
      value += 0.2;
      break;
    default:
      break;
  }
  return `${value}em`;
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
  padding: 0.2em 0.8em 0.3em;
  border-radius: 0;
  width: ${width};
  cursor: ${cursor};
  font: 400 ${fontSize} / 1.5 ${font};
  opacity: ${opacity};
  color: ${color};
  border: 1px solid ${paletteColor};
  background: ${bg};
`;

const Anchor = styled.a`
  ${styles};
`;
const StyledButton = styled.button`
  ${styles};
`;

const Button = ({ href, type, ...props }) => {
  if (href) {
    return <Anchor {...props} />;
  }
  return <StyledButton {...props} type={type} />;
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  palette: PropTypes.oneOf(['primary', 'cta', 'black']),
  size: PropTypes.oneOf(['s', 'm', 'l']),
  skin: PropTypes.oneOf(['fill', 'outline']),
  wide: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string
};

Button.defaultProps = {
  type: 'button',
  palette: 'black',
  size: 'm',
  skin: 'fill'
};

export default Button;
