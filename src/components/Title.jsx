import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Title = () => {
  return (
    <Jumbotron className="p-1 text-center mb-2" fluid>
      <Container>
        <h1>Welcome to Git-net</h1>
        <p>...a place to connect with other like-minded people... </p>
      </Container>
    </Jumbotron>
  );
};
export default Title;
