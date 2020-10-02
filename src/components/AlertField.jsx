import React from "react";
import { GoAlert } from "react-icons/go";
import Alert from "react-bootstrap/Alert";
import { IconContext } from "react-icons";

const AlertField = (props) => {
  return (
    <Alert variant="info" className="text-center">
      <IconContext.Provider
        value={{
          style: {
            fontSize: "40px",
            color: "white",
            paddingRight: "1rem",
          },
        }}
      >
        <div>
          <GoAlert />
        </div>
      </IconContext.Provider>
      <Alert.Heading>Hmm, something went wrong here</Alert.Heading>
      <p>
        Aww yeah, we got and error: {""}
        {props.errorMessage}
      </p>
    </Alert>
  );
};
export default AlertField;
