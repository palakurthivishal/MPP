import React from "react";
import SocialIcon from "./socialIcon";

const coverStyles = {
  display: "flex",
  flexWrap: "wrap"
};

export default ({ data }) => {
  return (
    <div style={coverStyles}>
      {data.map((d, i) => {
        return <SocialIcon config={d} key={i} />;
      })}
    </div>
  );
};
