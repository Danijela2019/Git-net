import React from "react";
import { Navbar, Button, Form, FormControl } from "react-bootstrap";
import { GoMarkGithub } from "react-icons/go";

import IconPlacer from "./IconPlacer";

const NavigationBar = ({ submit, value, change }) => {
  return (
    <Navbar bg="info" variant="dark" className="font-weight-bold">
      <IconPlacer>
        <GoMarkGithub />
      </IconPlacer>
      <Navbar.Brand>GIT-NET</Navbar.Brand>
      <Form inline onSubmit={submit}>
        <FormControl
          type="text"
          placeholder="Github username"
          value={value}
          className="mr-sm-2"
          onChange={change}
        />
        <Button variant="outline-light" type="submit">
          Search
        </Button>
      </Form>
    </Navbar>
  );
};
export default NavigationBar;
