import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import {
  GoRepoForked,
  GoOctoface,
  GoGitMerge,
  GoGitPullRequest,
  GoGitBranch,
} from "react-icons/go";

import ReposList from "./ReposList";
import IconPlacer from "./IconPlacer";

const InfoBoard = ({
  picture,
  name,
  gitLink,
  userName,
  numRepos,
  viewRepos,
  theFollowed,
  theFollowers,
  repos,
}) => {
  return (
    <Container
      fluid
      className="d-inline-flex  flex-column flex-md-row  mt-4 pb-2"
    >
      <Card className="bg-info mw-100" text="white">
        <Card.Img variant="top" src={picture} />
        <Card.Body className="pt-4  text-center mx-auto">
          <Card.Title>{name}</Card.Title>
          <Button variant="outline-light" href={gitLink}>
            {" "}
            View profile
          </Button>
        </Card.Body>
      </Card>

      <Container fluid className="w-100 p-0 p-md-4 ">
        <Card className="w-100 mt-3 mb-3 text-center" text="white" bg="info">
          <Card.Body className="d-inline-flex">
            <IconPlacer className="p-1">
              <GoRepoForked />
            </IconPlacer>
            <Card.Title className="p-1">
              Git-hub user name: {userName}
            </Card.Title>
          </Card.Body>
        </Card>
        <Card className="w-100 mt-3 mb-3 text-center" bg="info" text="white">
          <Card.Body className="d-inline-flex ">
            <IconPlacer className="p-1">
              <GoGitPullRequest />
            </IconPlacer>
            <Card.Title className="p-1">
              Public git repos: {numRepos}
            </Card.Title>
            <Button
              onClick={viewRepos}
              className="ml-auto"
              variant="outline-light"
            >
              View all public repos
            </Button>
          </Card.Body>
        </Card>
        <Card className="w-100 mt-3 mb-3 text-center" text="white" bg="info">
          <Card.Body className="d-inline-flex ">
            <IconPlacer className="p-1">
              <GoGitBranch />
            </IconPlacer>
            <Card.Title className="p-1">
              Number of following: {theFollowed}
            </Card.Title>
          </Card.Body>
        </Card>
        <Card className=" w-md-60 text-center" bg="info" text="white">
          <Card.Body className="d-inline-flex ">
            <IconPlacer className="p-1">
              <GoGitMerge />
            </IconPlacer>
            <Card.Title className="p-1">
              Number of followers: {theFollowers}
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>

      <Card
        className="text-center mt-3 mt-md-0 w-md-30"
        style={{ minWidth: "300px" }}
        bg="info"
        text="white"
      >
        <Card.Body>
          <IconPlacer>
            <GoOctoface />
          </IconPlacer>
          <Card.Title>Top six repos: </Card.Title>
          <ReposList repos={repos.slice(0, 6)} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default InfoBoard;
