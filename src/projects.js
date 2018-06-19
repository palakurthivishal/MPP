import React from "react";

const wrapperStyles = {};

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
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link"
                        data-toggle="collapse"
                        data-target={"#" + this.generateCardId(i)}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        {d.name}
                      </button>
                    </h5>
                  </div>

                  <div
                    id={this.generateCardId(i)}
                    class="collapse show"
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
