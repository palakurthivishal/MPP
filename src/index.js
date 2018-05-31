import React from "react";
import { render } from "react-dom";

import Cover from "./cover";
import Summary from "./summary";

const profileData = {
  name: "Vishal Goud Palakurthi",
  avatarImg:
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png",
  personal: {
    hobbies: "",
    interests: ""
  },
  professional: {
    shortIntro:
      "I'm an experienced Front-end Engineer with a demonstrated history of working in the computer software industry. Skilled in Agile Methodologies, User Interface development using HTML5, CSS3, Javascript, jQuery, Angular JS, React JS and along with familiarity of Node Js, Express Js and Mongo DB.",
    currentRole: {
      organization: "Development Bank of Singapore",
      designation: "Development Engineer",
      location: "Hyderabad, Telangana, India"
    },
    companiesWorkedFor: [
      {
        name: "Development Bank of Singapore",
        designation: "Development Engineer"
      },
      {
        name: "Innominds Software SEZ India Private Limited",
        designation: "Senior Software Engineer"
      }
    ],
    projects: [],
    technologies: [
      {
        name: "Java",
        experience: "1 year",
        howGoodAmI: ""
      }
    ]
  }
};

const App = () => {
  return (
    <div className="">
      <div className="row">
        <div className="col-12 col-md-8">
          <Cover imgPath={profileData.avatarImg} />
          <Summary
            name={profileData.name}
            currentRole={profileData.professional.currentRole}
            shortIntro={profileData.professional.shortIntro}
          />
        </div>
        <div className="col-12 col-md-4" />
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
