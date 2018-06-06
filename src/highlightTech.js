import React from "react";

const compStyles = {
  border: "1px solid gold",
  height: "50px",
  width: "50px",
  position: "absolute",
  top: 0,
  left: 0
};

class HighlightTechBlock extends React.Component {
  // constructor(){
  //   super();
  // }
  startAnimation() {}
  pauseAnimation() {}
  componentWillReceiveProps(newP, oldP) {
    if (newP.animState === "start") {
    } else if (newP.animState === "pause") {
    }
  }
  render() {
    return <div style={compStyles} />;
  }
}

export default HighlightTechBlock;
