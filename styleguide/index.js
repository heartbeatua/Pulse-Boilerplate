import React, { Fragment } from 'react';
import styled from 'styled-components';
import Box from '../src/components/atoms/Box';
import Text from '../src/components/atoms/Text';
import Title from '../src/components/atoms/Title';
import Card from '../src/components/molecules/Card';
import Col from '../src/components/atoms/Col';
import Row from '../src/components/atoms/Row';
import Container from '../src/components/atoms/Container';
import Divider from '../src/components/atoms/Divider';
import Link from '../src/components/atoms/Link';
import logo from './img/logo.svg';
import bg from './img/footer_illustration.svg';
import iconStyle from './img/icons/style.svg';
import iconComp from './img/icons/components.svg';
import iconCoreValue from './img/icons/core-values.svg';
import iconPrinciples from './img/icons/principles.svg';

const Content = styled(Box)`
  display: block;
  background-repeat: no-repeat;
  background-position: 50% calc(100% + 400px);
`;

const Logo = styled.div`
  padding: 40px 40px 36px;
`;

const Home = () => (
  <Fragment>
    <Box mb="80px">
      <Logo>
        <img src={logo} alt="" />
      </Logo>
    </Box>
    <Content style={{ backgroundImage: `url(${bg})` }} pb="350px">
      <Container>
        <Title is="h1" size="h1" m="0 0 85px -8px">
          .pulse
        </Title>
        <Title is="h2" size="h4" m="0 0 85px">
          React based boilerplate for creating scalable and well documented Design Systems.
        </Title>
        <Card
          to="/introduction"
          title="Introduction"
          text="You can very easily build your own design system with pulse boilerplate."
          name="intro"
          mb="72px"
          p="88px"
        />
        <Row
          gap={72}>
          <Col
            mb="72px"
            width={['auto']}>
            <Card
              to="/core-values"
              title="Core Values"
              text="Core values are the fundamental beliefs of a person or organization."
              icon={iconCoreValue}
            />
          </Col>
          <Col
            mb="72px"
            width={['auto']}>
            <Card
              to="/principles"
              title="Principles"
              text="Design Principles are widely applicable laws, guidelines, biases and design considerations."
              icon={iconPrinciples}
            />
          </Col>
        </Row>
        <Row gap={72}>
          <Col
            mb="72px"
            width={['auto']}>
            <Card
              to="/style"
              title="Style"
              text="Colors, spacing, fonts and other fundamental things."
              icon={iconStyle}
            />
          </Col>
          <Col width={['auto']}>
            <Card
              to="/components"
              title="Components"
              text="Library of React components we use. Inspired by Atomic
                  methodology."
              icon={iconComp}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Divider m="160px 0 147px" />
          </Col>
        </Row>
        <Row gap={110}>
          <Col width={[1 / 3]}>
            <Title is="h3" size="h4" m="0 0 30px">
              Pulse v1.0
            </Title>
            <Text>Opening is always so exciting.</Text>
            <Text m={0}>
              <Link
                underline
                href="https://github.com/heartbeatua/Pulse-Boilerplate"
                target="_blank"
              >
                find out more...
              </Link>
            </Text>
          </Col>
          <Col width={[1 / 3]}>
            <Box maxWidth="336px">
              <Title is="h3" size="h4" m="0 0 30px">
                Resources
              </Title>
              <Text>
                Guides and articles we create to help digital product teams make
                their products better.
              </Text>
              <Text m={0}>
                <Link
                  underline
                  href="https://heartbeat.ua/resources"
                  target="_blank"
                >
                  find out more...
                </Link>
              </Text>
            </Box>
          </Col>
          <Col width={[1 / 3]}>
            <Box maxWidth="336px">
              <Title is="h3" size="h4" m="0 0 30px">
                Did you like it?
              </Title>
              <Text m="0 0 35px">
                We are currently creating, documenting and updating our process
                of Design System creation.
              </Text>
              <Text m={0}>
                <Link
                  underline
                  href="https://heartbeat.ua/design-system-core"
                  target="_blank"
                >
                  find out more...
                </Link>
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </Content>
  </Fragment>
);

export default Home;
