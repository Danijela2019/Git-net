import React from "react";
import { GoAlert } from "react-icons/go";
import Alert from "react-bootstrap/Alert";

import IconPlacer from "./IconPlacer";

const AlertField = (errorMessage) => {
  return (
    <Alert variant="info" className="text-center">
      <IconPlacer>
        <GoAlert />
      </IconPlacer>
      <Alert.Heading>Hmm, something went wrong here</Alert.Heading>
      <p>
        Aww yeah, we got and error: {""}
        {errorMessage}
      </p>
    </Alert>
  );
};
export default AlertField;
