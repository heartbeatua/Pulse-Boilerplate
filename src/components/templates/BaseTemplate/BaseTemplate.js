import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

const BaseTemplate = ({ header, children }) => (
  <Wrapper>
    {header}
    {children}
  </Wrapper>
);

BaseTemplate.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node,
};

export default BaseTemplate;
