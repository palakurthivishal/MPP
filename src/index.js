import React from "react";
import { render } from "react-dom";

import profileData, { particlesConfig } from "./appContext";

import Particles from "react-particles-js";

import Cover from "./cover";
import Summary from "./summary";
import TechBox from "./techbox";
import ConnectWithMe from "./connectWithMe";
import Projects from "./projects";
import CompaniesWorkedFor from "./companiesWorkedFor";

const App = () => {
  return (
    <div>
      <Particles
        params={particlesConfig}
        style={{
          width: "100%",
          position: "fixed",
          background: "#EDEDED",
          opacity: 0.8
        }}
      />
      <div className="container main-container">
        <div className="row">
          <div className="col-12 col-md-8">
            <Cover imgPath={profileData.avatarImg} />
            <Summary
              name={profileData.name}
              currentRole={profileData.professional.currentRole}
              shortIntro={profileData.professional.shortIntro}
            />
            <Projects data={profileData.professional.projects} />
            <CompaniesWorkedFor
              data={profileData.professional.companiesWorkedFor}
            />
          </div>
          <div className="col-12 col-md-4">
            <TechBox data={profileData.professional.technologies} />
            <ConnectWithMe className="mTop-10" data={profileData.social} />
          </div>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
