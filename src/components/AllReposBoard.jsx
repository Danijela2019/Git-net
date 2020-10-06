import React from "react";
import { Container, ListGroup } from "react-bootstrap";

const ReposData = ({ repos1 }) => {
  const allRepos = repos1;
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

const AllReposBoard = ({ repos }) => {
  return (
    <Container fluid>
      <ReposData repos1={repos}> {repos.repos1}</ReposData>
    </Container>
  );
};

export default AllReposBoard;
