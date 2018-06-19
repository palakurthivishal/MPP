import React from "react";

const wrapperStyles = {};

export default class CompaniesWorkedFor extends React.Component {
  buildCard(c) {
    const bgStyles = {
      background: `url(${c.logo})`,
      backgroundPosition: "center",
      backgroundSize: "120px auto",
      backgroundRepeat: "no-repeat",
      height: "120px",
      position: "relative"
    };
    const linkStyles = {
      display: "inline",
      position: "absolute",
      right: "-5px",
      top: "-5px",
      fontSize: "16px",
      borderRadius: "50%",
      color: "#FFF"
    };
    return (
      <div className="col-12 col-sm-6">
        <div className="card mBot-10">
          <div className="card-img-top" style={bgStyles}>
            <a
              target="_blank"
              href={c.link}
              style={linkStyles}
              className="badge badge-secondary fas fa-link"
            />
          </div>
          <div className="card-body">
            <p className="card-text text-center">
              <span>
                <h4>{c.designation}</h4>{" "}
                <b>
                  {c.from} - {c.to}
                </b>{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div style={wrapperStyles} className="col-12 mTop-20">
        <h3 className="text-center">My Employers</h3>
        <div className="row">
          {this.props.data &&
            this.props.data.map(c => {
              return this.buildCard(c);
            })}
        </div>
      </div>
    );
  }
}
