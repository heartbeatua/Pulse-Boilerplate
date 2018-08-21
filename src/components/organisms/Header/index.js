import React from 'react';
import styled from 'styled-components';
import { Nav, Container, Row, Col } from 'components';
import { space } from 'styled-system';

const Wrapper = styled(Container)`
  margin-top: 15px;
`;
const StyledNav = styled(Nav)`
  float: right;
`;
const Border = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  ${space};
`;

const Header = () => (
  <Wrapper>
    <Row>
      <Col>Logo</Col>
      <Col>
        <StyledNav />
      </Col>
      <Col width={[1]}>
        <Border mt="15px" />
      </Col>
    </Row>
  </Wrapper>
);

export default Header;
