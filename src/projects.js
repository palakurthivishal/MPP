import React from "react";

const wrapperStyles = {};

const projectHeaderStyles = {
  background: "#cca76f40"
};
const projectTitleStyles = {
  color: "#2e4249",
  fontSize: "16px"
};

class Projects extends React.Component {
  generateCardId(i) {
    return "card-" + i;
  }
  render() {
    return (
      <div style={wrapperStyles}>
        <div id="accordion">
          {this.props.data &&
            this.props.data.map((d, i) => {
              return (
                <div class="card">
                  <div class="card-header" style={projectHeaderStyles}>
                    <h5 class="mb-0">
                      <button
                        style={projectTitleStyles}
                        class="btn btn-link"
                        data-toggle="collapse"
                        data-target={"#" + this.generateCardId(i)}
                        aria-expanded="true"
                        aria-controls={"collapse-" + { i }}
                      >
                        {d.name}
                      </button>
                    </h5>
                  </div>

                  <div
                    id={this.generateCardId(i)}
                    class={"collapse " + (i === 0 ? "show" : "")}
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div class="card-body">{d.description}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Projects;
