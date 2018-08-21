import React from 'react';
import { BaseTemplate, Header, Container, Row, Col } from 'components';

const Home = () => (
  <BaseTemplate header={<Header />}>
    <Container>
      <Row gap={2}>
        <Col width={[1, 'auto']}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen.
          </p>
        </Col>
        <Col width={[1, 'auto']}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen.
          </p>
        </Col>
        <Col width={[1, 'auto']}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen.
          </p>
        </Col>
      </Row>
    </Container>
  </BaseTemplate>
);

export default Home;
