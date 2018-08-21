import React from 'react';
import { BaseTemplate, Header, Container, Row, Col } from 'components';

const About = () => (
  <BaseTemplate header={<Header />}>
    <Container>
      <Row gap={3}>
        <Col width={[1, 1 / 2]}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </Col>
        <Col width={[1, 1 / 2]}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </Col>
      </Row>
    </Container>
  </BaseTemplate>
);

export default About;
