import React from "react";
import { GoAlert } from "react-icons/go";
import Alert from "react-bootstrap/Alert";

import IconPlacer from "./IconPlacer";

const AlertField = (props) => {
  return (
    <Alert variant="info" className="text-center">
      <IconPlacer>
        <GoAlert />
      </IconPlacer>
      <Alert.Heading>Hm, something went wrong here</Alert.Heading>
      <p>
        Aww yeah, we got and error: {""}
        {props.errorMessage}
      </p>
    </Alert>
  );
};
export default AlertField;
