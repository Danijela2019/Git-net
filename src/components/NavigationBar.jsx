import React from "react";
import { Navbar, Button, Form, FormControl, Container } from "react-bootstrap";
import { GoMarkGithub } from "react-icons/go";

import IconPlacer from "./IconPlacer";

const NavigationBar = ({ submit, value, change }) => {
  return (
    <Navbar
      bg="info"
      variant="dark"
      className="font-weight-bold d-flex flex-column flex-md-row px-3 px-md-8"
    >
      <IconPlacer>
        <GoMarkGithub />
      </IconPlacer>
      <Navbar.Brand>GIT-NET</Navbar.Brand>
      <Container className="w-100">
        <Form className=" d-flex w-100" onSubmit={submit}>
          <FormControl
            type="text"
            placeholder="Github username"
            value={value}
            className="mr-2"
            onChange={change}
          />
          <Button variant="outline-light" type="submit">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
