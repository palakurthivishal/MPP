import React from "react";
import Avatar from "./avatar";

const coverStyles = {
  height: "100px",
  width: "100%",
  background: "#1d354e"
};

export default ({ imgPath }) => {
  return (
    <div style={coverStyles}>
      <Avatar imgPath={imgPath} />
    </div>
  );
};
