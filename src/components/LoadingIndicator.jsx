import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

const LoadingIndicator = () => {
  return (
    <Container fluid className="d-inline-flex justify-content-center">
      <Spinner animation="border" variant="info" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Container>
  );
};

export default LoadingIndicator;
