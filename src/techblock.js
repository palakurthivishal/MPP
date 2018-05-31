import React from "react";

const wrapperStyles = {
  display: "inline-block",
  padding: "10px"
};

const imgStyles = {
  height: "50px",
  width: "50px"
};

export default ({ data }) => {
  return (
    <span style={wrapperStyles}>
      <img style={imgStyles} src={data.img} alt={data.name} />
    </span>
  );
};
