import React from "react";

const wrapperStyles = {};

export default class CompaniesWorkedFor extends React.Component {
  buildCard(c) {
    const bgStyles = {
      background: `url(${c.logo})`,
      backgroundPosition: "center",
      backgroundSize: "90% auto",
      backgroundRepeat: "no-repeat",
      height: "120px"
    };
    return (
      <div className="col-12 col-sm-6">
        <div className="card mBot-10">
          <div className="card-img-top" style={bgStyles} />
          <div className="card-body">
            <p className="card-text">
              Some quick ,example text to build on the card title and make up
              the bulk of the card's content.
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
