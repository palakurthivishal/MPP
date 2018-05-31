import React from "react";
import TechBlock from "./techblock";

const wrapperStyles = {
  // maxHeight: "200px",
  overflow: "auto",
  background: "#EDEDED",
  padding: "0 10px"
};

export default ({ data }) => {
  return (
    <div class="text-center">
      <div style={wrapperStyles}>{data.map(d => <TechBlock data={d} />)}</div>
    </div>
  );
};
