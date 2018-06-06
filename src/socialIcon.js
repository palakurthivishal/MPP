import React from "react";

const coverStyles = {};
const logoStyles = {
  height: "30px",
  margin: "5px"
};

export default ({ config }) => {
  return (
    <div style={coverStyles}>
      <a href={config.link}>
        <img style={logoStyles} src={config.logo} alt="social icon" />
      </a>
    </div>
  );
};
