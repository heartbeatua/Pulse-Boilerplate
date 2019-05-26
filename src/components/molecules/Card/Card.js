import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';
import { pick, keys } from 'lodash';
import Title from '../../atoms/Title';
import Text from '../../atoms/Text';
import Box from '../../atoms/Box';
import Link from '../../atoms/Link';

const StyledCard = styled(Link)`
  display: block;
  height: 100%;
  transition: box-shadow 0.1s ease;
  &:hover {
    box-shadow: 0 0 0 6px;
  }
`;

const Card = ({ to, icon, title, text, name, border, ...rest }) => {
  // eslint-disable-next-line
  const spaces = pick(rest, keys(space.propTypes));
  return (
    <StyledCard to={to || '/'} name={name} border={border} {...spaces}>
      {icon && (
        <Box display="flex" alignItems="center" height="116px" mb="xl">
          <div>
            <img src={icon} alt="" />
          </div>
        </Box>
      )}
      <Title as="h3" size="h4" mb="s">
        {title}
      </Title>
      <Text
        m={0}
        maxWidth="420px"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </StyledCard>
  );
};

Card.propTypes = {
  border: PropTypes.string,
  p: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  ...space.propTypes,
};

Card.defaultProps = {
  border: '2px solid',
  p: '56px',
};

export default Card;
