import { GoMarkGithub } from "react-icons/go";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import IconPlacer from "./IconPlacer";

const NavigationBar = (props) => {
  return (
    <Navbar bg="info" fixed="top" variant="dark" className="font-weight-bold">
      <IconPlacer>
        <GoMarkGithub />
      </IconPlacer>
      <Navbar.Brand>GIT-NET</Navbar.Brand>
      <Form inline onSubmit={props.submit}>
        <FormControl
          type="text"
          placeholder="Github username"
          value={props.value}
          className="mr-sm-2"
          onChange={props.change}
        />
        <Button variant="outline-light" type="submit">
          Search
        </Button>
      </Form>
      <div></div>
    </Navbar>
  );
};
export default NavigationBar;
