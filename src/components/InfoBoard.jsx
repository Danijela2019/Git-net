import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import {
  GoRepoForked,
  GoOctoface,
  GoGitMerge,
  GoGitPullRequest,
  GoGitBranch,
} from "react-icons/go";
import IconPlacer from "./IconPlacer";

const ReposList = (props) => {
  const allRepos = props.listedRepos;
  const allReposList =
    allRepos.legth !== 0 ? (
      allRepos.slice(0, 6).map((item) => {
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

const InfoBoard = (props) => {
  return (
    <Container fluid className="d-inline-flex  pb-2">
      <Card className="bg-info " text="white" style={{ width: "30rem" }}>
        <Card.Img variant="top" src={props.picture} />
        <Card.Body className="pt-4  text-center mx-auto">
          <Card.Title>{props.name}</Card.Title>
          <Button variant="outline-light" href={props.gitLink}>
            {" "}
            View profile
          </Button>
        </Card.Body>
      </Card>

      <Container>
        <Card className="w-100 mt-3 mb-3 text-center" text="white" bg="info">
          <Card.Body className="d-inline-flex">
            <IconPlacer className="p-1">
              <GoRepoForked />
            </IconPlacer>
            <Card.Title className="p-1">
              Git-hub user name: {props.userName}
            </Card.Title>
          </Card.Body>
        </Card>
        <Card className="w-100 mt-3 mb-3 text-center" bg="info" text="white">
          <Card.Body className="d-inline-flex ">
            <IconPlacer className="p-1">
              <GoGitPullRequest />
            </IconPlacer>
            <Card.Title className="p-1">
              Public git repos: {props.numRepos}
            </Card.Title>
            <Button className="ml-auto" variant="outline-light">
              View all public repos
            </Button>
          </Card.Body>
        </Card>
        <Card className="w-100 mt-3 mb-3 text-center" text="white" bg="info">
          <Card.Body className="d-inline-flex ">
            <IconPlacer className="p-1">
              <GoOctoface />
            </IconPlacer>
            <Card.Title className="p-1">
              Number of following: {props.theFollowed}
            </Card.Title>
            <Button className="ml-auto" variant="outline-light">
              View all followed
            </Button>
          </Card.Body>
        </Card>
        <Card className=" w-100 text-center" bg="info" text="white">
          <Card.Body className="d-inline-flex ">
            <IconPlacer className="p-1">
              <GoGitMerge />
            </IconPlacer>
            <Card.Title className="p-1">
              Number of followers: {props.theFollowers}
            </Card.Title>
            <Button className="ml-auto" variant="outline-light">
              View all followers
            </Button>
          </Card.Body>
        </Card>
      </Container>

      <Card
        className="text-center "
        bg="info"
        text="white"
        style={{ width: "30rem" }}
      >
        <Card.Body>
          <IconPlacer>
            <GoGitBranch />
          </IconPlacer>
          <Card.Title>Most popular repos: </Card.Title>
          <ReposList listedRepos={props.repos} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default InfoBoard;
