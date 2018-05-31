import React from "react";

const avatarStyles = {
  height: "100px",
  borderRadius: "50%"
};

const wrapperStyles = {
  position: "relative",
  top: "50px"
};

export default ({ imgPath }) => {
  return (
    <div style={wrapperStyles} className="text-center">
      <img src={imgPath} style={avatarStyles} alt="cover-pic" />
    </div>
  );
};
