import { GoMarkGithub } from "react-icons/go";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { IconContext } from "react-icons";

const NavigationBar = (props) => {
  return (
    <Navbar bg="info" variant="dark" className="font-weight-bold">
      <IconContext.Provider
        value={{
          style: { fontSize: "50px", color: "white", paddingRight: "1rem" },
        }}
      >
        <div>
          <GoMarkGithub />
        </div>
      </IconContext.Provider>
      <Navbar.Brand>GIT-NET</Navbar.Brand>
      <Form inline onSubmit={props.submit}>
        <FormControl
          type="text"
          placeholder="Search"
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
