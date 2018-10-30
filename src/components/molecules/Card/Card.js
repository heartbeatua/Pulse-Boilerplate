import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { space } from 'styled-system';
import { pick, keys } from 'lodash';
import Title from '../../atoms/Title/index';
import Text from '../../atoms/Text/index';
import Box from '../../atoms/Box/index';

const StyledCard = styled(Box)`
  display: block;
  transition: box-shadow 0.1s ease;
  &:hover {
    box-shadow: 0 0 0 6px;
  }
`;

const Card = props => {
  const { to, icon, title, text, name, border } = props;
  const spaces = pick(props, keys(space.propTypes));
  return (
    <NavLink to={to || '/'}>
      <StyledCard name={name} border={border} {...spaces}>
        {icon && (
          <Box display="flex" alignItems="center" height="116px" mb="45px">
            <div>
              <img src={icon} alt="" />
            </div>
          </Box>
        )}
        <Title is="h3" size="h4" m="0 0 18px">
          {title}
        </Title>
        <Text
          m={0}
          dangerouslySetInnerHTML={{
            __html: text
          }}
        />
      </StyledCard>
    </NavLink>
  );
};

Card.propTypes = {
  ...space.propTypes,
  border: PropTypes.string,
  p: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string
};

Card.defaultProps = {
  border: '2px solid',
  p: '56px'
};

export default Card;
