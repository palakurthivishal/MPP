import React from "react";

const coverStyles = {};
const logoStyles = {
  height: "30px",
  margin: "5px",
  fontSize: "24px",
  color: "#FFF"
};

export default ({ config }) => {
  return (
    <div style={coverStyles}>
      <a href={config.link}>
        <i style={logoStyles} className={config.iconClass} />
      </a>
    </div>
  );
};
