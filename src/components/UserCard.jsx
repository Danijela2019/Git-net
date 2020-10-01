import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const UserCard = (props) => {
  return (
    <Card bg="light" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.avatar} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Title>{props.userName}</Card.Title>
        <Card.Text>Public repos: {props.numRepos}</Card.Text>
        <Button variant="info" href={props.gitLink}>
          {" "}
          View profile
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
/*src={props.avatar} */
