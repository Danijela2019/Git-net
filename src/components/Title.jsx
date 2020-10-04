import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Title = () => {
  return (
    <Jumbotron className="pb-1 m-2 text-center " fluid>
      <Container>
        <h1>Welcome to Git-net</h1>
        <p>...a place to connect with other like-minded people... </p>
      </Container>
    </Jumbotron>
  );
};
export default Title;
