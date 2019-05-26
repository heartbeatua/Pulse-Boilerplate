import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { color, space, display, width, height, borders } from 'styled-system';

const styles = css`
  ${({ underline }) => underline && `border-bottom: ${underline}px solid`};
  ${({ underline }) =>
    underline &&
    css`
      &:hover {
        border-bottom-color: transparent;
      }
    `};
  cursor: pointer;
  text-decoration: none;
  ${space};
  ${color};
  ${display};
  ${width};
  ${height};
  ${borders};
`;

const StyledLink = styled.a`
  ${styles};
`;
const StyledNavLink = styled(NavLink)`
  ${styles};
`;

const Link = ({ to, href, ...rest }) => {
  if (to) {
    return <StyledNavLink to={to} {...rest} />;
  }
  if (href) {
    return (
      <StyledLink
        target="_blank"
        rel="noopener noreferrer nofollow"
        href={href}
        as="a"
        {...rest}
      />
    );
  }
  return (
    <StyledLink
      role="button"
      as="span"
      style={{ userSelect: 'none' }}
      {...rest}
    />
  );
};

Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  underline: PropTypes.number,
  color: PropTypes.string,
  ...space.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...borders.propTypes,
};
Link.defaultProps = {
  underline: 0,
  color: 'inherit',
};

export default Link;
