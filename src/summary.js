import React from "react";

const wrapperStyles = {
  marginTop: "60px"
};

export default ({ name, currentRole }) => {
  return (
    <div style={wrapperStyles} className="text-center">
      <h3>{name}</h3>
      <h4>{currentRole.designation}</h4>
      <h5>{currentRole.organization}</h5>
      <h6>{currentRole.location}</h6>
      <hr className="border border-dark" />
    </div>
  );
};
