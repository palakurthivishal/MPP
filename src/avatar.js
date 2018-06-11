import React from "react";

const avatarStyles = {
  height: "100px"
};

const wrapperStyles = {
  position: "relative",
  top: "50px"
};

export default ({ imgPath }) => {
  return (
    <div style={wrapperStyles} className="text-center">
      <img
        className="rounded-circle"
        src={imgPath}
        style={avatarStyles}
        alt="cover-pic"
      />
    </div>
  );
};
