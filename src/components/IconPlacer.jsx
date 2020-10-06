import { IconContext } from "react-icons";
import React from "react";

const IconPlacer = ({ children }) => {
  return (
    <IconContext.Provider
      value={{
        style: {
          fontSize: "40px",
          color: "white",
          paddingRight: "1rem",
        },
      }}
    >
      <div>{children}</div>
    </IconContext.Provider>
  );
};

export default IconPlacer;
