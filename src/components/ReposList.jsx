import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const ReposList = (props) => {
  const allRepos = props.repos;
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
        Empty repo
      </ListGroup.Item>
    );
  return <ListGroup>{allReposList}</ListGroup>;
};

export default ReposList;
