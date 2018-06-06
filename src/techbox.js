import React from "react";
import TechBlock from "./techblock";
import HighlightTechBlock from "./highlightTech";

const wrapperStyles = {
  // maxHeight: "200px",
  overflow: "auto",
  background: "#EDEDED",
  padding: "0 10px",
  position: "relative"
};

export default class TechBox extends React.Component {
  constructor() {
    super();
    this.timerInterval = 300000;
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {}, this.timerInterval);
  }
  startAnimation() {}
  render() {
    return (
      <div style={wrapperStyles} class="text-center">
        <div>{this.props.data.map(d => <TechBlock data={d} />)}</div>
        <HighlightTechBlock />
      </div>
    );
  }
}
