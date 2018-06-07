import React from "react";

const coverStyles = {};
const logoStyles = {
  height: "30px",
  margin: "5px",
  fontSize: "24px"
};

export default ({ config }) => {
  return (
    <div style={coverStyles}>
      <a href={config.link}>
        {config.iconClass}
        <i style={logoStyles} className={config.logoClass} />
      </a>
    </div>
  );
};
