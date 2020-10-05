import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

const ReposData = (props) => {
  const allRepos = props.repos1;
  const allReposList =
    allRepos.length !== 0 ? (
      allRepos.map((item) => {
        return (
          <ListGroup.Item
            className="d-inline-flex justify-content-around"
            text="white"
            action
            variant="info"
            key={item.id}
          >
            <a href={item.html_url}>{item.name}</a>
            <p>Date created: {item.created_at.slice(0, 10)}</p>
            <p>Last update: {item.updated_at.slice(0, 10)}</p>
            <p> Stars: {item.stargazers_count} </p>
            <p>Forked: {item.forks} times</p>
          </ListGroup.Item>
        );
      })
    ) : (
      <ListGroup.Item action variant="info">
        Empty repo
      </ListGroup.Item>
    );
  return <ListGroup>{allReposList}</ListGroup>;
};

const AllReposBoard = (props) => {
  return (
    <Container fluid>
      <ReposData repos1={props.repos}> {props.repos.repos1}</ReposData>
    </Container>
  );
};

export default AllReposBoard;
