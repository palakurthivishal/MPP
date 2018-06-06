import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

class HighlightTechBlock extends React.Component {
  componentDidMount() {
    const elt = ReactDOM.findDOMNode(this.refs.containerRef);
  }
  render() {
    const { left, top, width, height } = this.props.config;
    const compStyles = {
      border: "1px solid gold",
      height: height + "px",
      width: width + "px",
      position: "absolute",
      top: top + "px",
      left: left + "px",
      transition: "all 1s",
      zIndex: "1"
    };
    return (
      <div
        ref={"containerRef"}
        style={compStyles}
        data-toggle="popover"
        title="Popover title"
        data-content="And here's some amazing content. It's very engaging. Right?"
      />
    );
  }
}

export default HighlightTechBlock;
