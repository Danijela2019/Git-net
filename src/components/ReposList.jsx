import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const ReposList = ({ repos }) => {
  const allRepos = repos;
  const allReposList =
    allRepos.length !== 0 ? (
      allRepos.map((item) => {
        return (
          <ListGroup.Item action variant="info" key={item.id}>
            <a href={item.html_url}>{item.name}</a>
          </ListGroup.Item>
        );
      })
    ) : (
      <ListGroup.Item action variant="info">
        No public repos available
      </ListGroup.Item>
    );
  return <ListGroup>{allReposList}</ListGroup>;
};

export default ReposList;
