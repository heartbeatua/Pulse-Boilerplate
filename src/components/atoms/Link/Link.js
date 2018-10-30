import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { color, space, fontSize } from 'styled-system';

const styles = css`
  ${({ underline }) => (underline ? `border-bottom: 1px solid` : null)};
  text-decoration: none;
  ${({ underline }) =>
    underline
      ? css`
          &:hover {
            border-bottom-color: transparent;
          }
        `
      : null};
  cursor: pointer;
  ${space};
  ${color};
  ${fontSize};
`;

const StyledLink = styled.a`
  ${styles};
`;
const StyledNavLink = styled(NavLink)`
  ${styles};
`;

const Link = props => {
  const { to } = props;
  return to ? <StyledNavLink {...props} /> : <StyledLink {...props} />;
};

Link.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  to: PropTypes.string,
  href: PropTypes.string,
  underline: PropTypes.bool
};
Link.defaultProps = {
  underline: false
};

export default Link;
