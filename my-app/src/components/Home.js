import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Home = () => {
  return (
    <div>
      <Container bg="info">
        <Row>
          <Col>1 of 1</Col>
        </Row>
        <Row>
          <Col>1 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
        </Row>
      </Container>
    </div>
  );
};
