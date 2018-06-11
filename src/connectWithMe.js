import React from "react";
import SocialIcon from "./socialIcon";

const coverStyles = {
  display: "flex",
  flexWrap: "wrap"
};

export default ({ data }) => {
  return (
    <div className="card bg-secondary text-white flat">
      <div className="card-body">
        <h5>Want to connect with me?</h5>
        <div style={coverStyles}>
          {data.map((d, i) => {
            return <SocialIcon config={d} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};
