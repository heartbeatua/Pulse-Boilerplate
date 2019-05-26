import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { themeGet as tg } from 'styled-system';
import HomePage from '../../pages/HomePage';
import InnerPage from '../../pages/InnerPage';

const Wrapper = styled.div`
  font-family: ${tg('fonts.bodyText')};
  font-size: ${tg('fontSizes.m')}px;
  color: ${tg('colors.black')};
  line-height: ${tg('lineHeights.l')};
`;

const BaseTemplate = ({ location, children }) => {
  const { pathname } = location;
  return (
    <Wrapper>
      {pathname === '/' ? (
        <HomePage>{children}</HomePage>
      ) : (
        <InnerPage>{children}</InnerPage>
      )}
    </Wrapper>
  );
};

BaseTemplate.propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
};

export default withRouter(BaseTemplate);
