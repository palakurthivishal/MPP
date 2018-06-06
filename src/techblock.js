import React from "react";

const wrapperStyles = {
  padding: "10px",
  zIndex: "2"
};

const imgStyles = {
  height: "50px",
  width: "50px"
};

export default class TechBlock extends React.Component {
  render() {
    return (
      <div
        onMouseOver={() => {
          this.props.activeTechBlock(this.props.index);
        }}
        style={wrapperStyles}
      >
        <img
          style={imgStyles}
          src={this.props.data.img}
          alt={this.props.data.name}
        />
      </div>
    );
  }
}
