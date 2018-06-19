import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
require("bootstrap");

class HighlightTechBlock extends React.Component {
  constructor() {
    super();
    this.popTemplate = `
      <div class="card text-white bg-primary" style="max-width: 18rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Dark card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    `;
  }
  componentDidMount() {
    this.showPopover();
  }
  componentDidUpdate() {
    const elt = ReactDOM.findDOMNode(this.refs.containerRef);
    setTimeout(() => {
      $(elt)
        .popover("show")
        .popover("update");
    }, 900);
  }
  componentWillUpdate() {
    this.hidePopover();
  }
  showPopover() {
    const elt = ReactDOM.findDOMNode(this.refs.containerRef);
    $(elt).popover("show");
  }
  hidePopover() {
    const elt = ReactDOM.findDOMNode(this.refs.containerRef);
    $(elt).popover("hide");
  }
  render() {
    const { left, top, width, height } = this.props.config;
    const compStyles = {
      border: "2px solid green",
      height: height + "px",
      width: width + "px",
      position: "absolute",
      top: top + "px",
      left: left + "px",
      transition: "all 0.5s",
      zIndex: "1"
    };
    return (
      <div style={compStyles} id="pop-wrap" tabIndex="0">
        <button
          tabIndex="1"
          data-boundary="window"
          data-animation="true"
          data-placement="bottom"
          data-offset="2 2"
          style={{
            height: "100%",
            width: "80%",
            border: 0,
            background: "transparent"
          }}
          data-toggle="popover"
          data-trigger="click"
          data-html="true"
          data-content={this.popTemplate}
          ref={"containerRef"}
        />
      </div>
    );
  }
}

export default HighlightTechBlock;
