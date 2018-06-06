import React from "react";
import ReactDOM from "react-dom";
import TechBlock from "./techblock";
import HighlightTechBlock from "./highlightTechBlock";

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
    this.timerInterval = 5000;
    this.state = {
      count: 0,
      highlightConfig: {}
    };
    this.animateState = "play";
    this.highlightTech = this.highlightTech.bind(this);
    this.selectTechBlockOnHover = this.selectTechBlockOnHover.bind(this);
  }

  highlightTech(temp) {
    const element = ReactDOM.findDOMNode(this.refs[`tech_${temp}`]);
    if (element) {
      const position = element.getBoundingClientRect();
      const parentElem = ReactDOM.findDOMNode(this.refs.containerRef);
      const parentPosition = parentElem.getBoundingClientRect();
      this.setState({
        count: temp,
        highlightConfig: {
          left: position.left - parentPosition.left,
          top: position.top - parentPosition.top,
          width: element.offsetWidth,
          height: element.offsetHeight,
          popupText: this.props.data[temp].experience
        }
      });
    } else {
      clearInterval(this.timer);
    }
  }
  componentDidMount() {
    this.highlightTech(0);
    this.timer = setInterval(() => {
      if (this.animateState !== "pause")
        this.highlightTech(this.state.count + 1);
    }, this.timerInterval);
  }
  selectTechBlockOnHover(index) {
    this.setState({
      count: index
    });
  }
  render() {
    const containerStyles = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    };
    return (
      <div ref="containerRef" style={wrapperStyles} className="text-center">
        <div style={containerStyles}>
          {this.props.data.map((d, i) => (
            <TechBlock
              activeTechBlock={this.selectTechBlockOnHover}
              key={i}
              index={i}
              ref={`tech_${i}`}
              data={d}
            />
          ))}
        </div>
        <HighlightTechBlock config={this.state.highlightConfig} />
      </div>
    );
  }
}
