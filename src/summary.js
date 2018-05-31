import React from "react";

const wrapperStyles = {
  marginTop: "60px"
};

const introStyles = {
  fontStyle: "italic",
  fontSize: "14px",
  color: "#000"
};

export default ({ name, currentRole, shortIntro }) => {
  return (
    <div style={wrapperStyles} className="text-center">
      <h3>{name}</h3>
      <h4>{currentRole.designation}</h4>
      <h5>{currentRole.organization}</h5>
      <h6>{currentRole.location}</h6>
      <hr className="border border-light" />
      <div className="card border-light">
        <div className="card-body">
          <p style={introStyles} className="card-text">
            {shortIntro}
          </p>
        </div>
      </div>
      <hr className="border border-light" />
    </div>
  );
};
