import React from 'react';
import styled from 'styled-components';
import Box from '../../src/components/atoms/Box';
import Text from '../../src/components/atoms/Text';
import Title from '../../src/components/atoms/Title';
import Card from '../../src/components/molecules/Card';
import Col from '../../src/components/atoms/Col';
import Row from '../../src/components/atoms/Row';
import Container from '../../src/components/atoms/Container';
import Divider from '../../src/components/atoms/Divider';
import Link from '../../src/components/atoms/Link';
import logo from '../src/assets/img/logo.svg';
import bg from '../src/assets/img/footer_illustration.svg';
import iconStyle from '../src/assets/img/icons/style.svg';
import iconComp from '../src/assets/img/icons/components.svg';
import iconCoreValue from '../src/assets/img/icons/core-values.svg';
import iconPrinciples from '../src/assets/img/icons/principles.svg';

const Content = styled(Box)`
  background: url(${bg}) no-repeat 50% calc(100% + 400px);
`;

export default () => (
  <>
    <Box mb="80px">
      <Box p="40px 40px 36px">
        <img src={logo} alt="" />
      </Box>
    </Box>
    <Content pb="352px">
      <Container>
        <Title as="h1" size="h1" m="0 0 80px">
          .pulse
        </Title>
        <Title size="h4" m="0 0 60px">
          React based boilerplate for creating scalable and well documented
          Design Systems.
        </Title>
        <Card
          to="/introduction"
          title="Introduction"
          text="You can very easily build your own design system with pulse boilerplate."
          name="intro"
          mb="72px"
          p="88px"
        />
        <Row gap={72}>
          <Col mb="72px" width={[1 / 2]}>
            <Card
              to="/core-values"
              title="Core Values"
              text="Core values are the fundamental beliefs of a person or organization."
              icon={iconCoreValue}
            />
          </Col>
          <Col mb="72px" width={[1 / 2]}>
            <Card
              to="/principles"
              title="Principles"
              text="Design Principles are widely applicable laws, guidelines, biases and design considerations."
              icon={iconPrinciples}
            />
          </Col>
        </Row>
        <Row gap={72}>
          <Col width={[1 / 2]}>
            <Card
              to="/style"
              title="Style"
              text="Colors, spacing, fonts and other fundamental things."
              icon={iconStyle}
            />
          </Col>
          <Col width={[1 / 2]}>
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
            <Divider m="160px 0 144px" />
          </Col>
        </Row>
        <Row gap={110}>
          <Col width={[1 / 3]}>
            <Title as="h3" size="h4">
              Pulse v1.1
            </Title>
            <Text>Opening is always so exciting.</Text>
            <Text m={0}>
              <Link
                underline={1}
                href="https://github.com/heartbeatua/Pulse-Boilerplate"
              >
                find out more...
              </Link>
            </Text>
          </Col>
          <Col width={[1 / 3]}>
            <Box maxWidth="336px">
              <Title as="h3" size="h4">
                Resources
              </Title>
              <Text>
                Guides and articles we create to help digital product teams make
                their products better.
              </Text>
              <Text m={0}>
                <Link underline={1} href="https://heartbeat.ua/resources">
                  find out more...
                </Link>
              </Text>
            </Box>
          </Col>
          <Col width={[1 / 3]}>
            <Box maxWidth="336px">
              <Title as="h3" size="h4">
                Did you like it?
              </Title>
              <Text>
                We are currently creating, documenting and updating our process
                of Design System creation.
              </Text>
              <Text m={0}>
                <Link
                  underline={1}
                  href="https://heartbeat.ua/design-system-core/#minimize"
                >
                  find out more...
                </Link>
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </Content>
  </>
);
