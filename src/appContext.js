const profileData = {
  name: "Vishal Goud Palakurthi",
  avatarImg:
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png",
  personal: {
    hobbies: "",
    interests: ""
  },
  social: [
    {
      name: "github logo",
      link: "",
      iconClass: "fab fa-github"
    },
    {
      name: "linkedin logo",
      link: "",
      iconClass: "fab fa-linkedin"
    },
    {
      name: "facebook logo",
      link: "",
      iconClass: "fab fa-facebook"
    },
    {
      name: "twitter logo",
      link: "",
      iconClass: "fab fa-twitter"
    }
  ],
  professional: {
    shortIntro:
      "I'm an experienced Front-end Engineer with a demonstrated history of working in the computer software industry. Skilled in Agile Methodologies, User Interface development using HTML5, CSS3, Javascript, jQuery, Angular JS, React JS and along with familiarity of Node Js, Express Js and Mongo DB.",
    currentRole: {
      organization: "Development Bank of Singapore",
      designation: "UI Engineer",
      location: "Hyderabad, Telangana, India"
    },
    companiesWorkedFor: [
      {
        name: "Development Bank of Singapore",
        designation: "Development Engineer",
        logo: "https://www.drwealth.com/wp-content/uploads/DBS-logo.png",
        from: "Aug 2017",
        to: "Now",
        link: "https://www.dbs.com.sg/"
      },
      {
        name: "Innominds Software SEZ India Private Limited",
        designation: "Senior Software Engineer",
        logo: "http://acelinetech.com/images/clients/17.png",
        from: "Nov 2012",
        to: "Jul 2017",
        link: "https://www.innominds.com/"
      }
    ],
    projects: [
      {
        name: "Trimble Platform as a Service (TPaaS) - Trimble",
        period: "Jan 2016 – Jul 2017",
        description: `Trimble consists of a number of smaller divisions each controlling research and development, sales and marketing in several business units, each focused on a vertical market, including agriculture, heavy civil construction and transportation and logistics and more. The corporate backbone has been mostly focused on consistency and providing platforms for support and taxation. "This creates a unique problem around supporting great market solutions, which have been somewhat silo-ed.The project's vision was that TPaaS could act as a gateway to share any Trimble service for wider reuse, such as reverse geocoding. For example, Trimble has five implementations of reverse geocoding services in production today.`
      },
      {
        name: "Appcito",
        period: "Jul 2014 – Jan 2016",
        description: `Appcito delivers cloud-based services that make it fast and easy to keep cloud applications performant, secure, available, and always improving.Our cloud-native proxy-based service improves application delivery with a web-scale solution for load balancing, application security, continuous deployment and more. Innovative application teams rely on Appcito to make their applications hum, their users happy and their companies succeed.Appcito is headquartered in Santa Clara CA, operates an Research and Development facility in Bangalore, India and has global sales and solution delivery capabilities. Founded in 2013, we are a young and fast-growing company serving organizations of any size and in any industry that are embracing the cost and flexibility advantages from cloud computing.Appcito’s team has experience creating successful businesses, building cloud and infrastructure technologies, and running IT operations at web scale. Before joining Appcito our team created enterprise-class products and enabled world-class customer success at Citrix, F5, Barracuda Networks, Juniper Networks, Meru Networks Apigee and others.`
      },
      {
        name: "Hospital Information System - Napier HealthCare",
        period: "Oct 2013 – Jun 2014",
        description: `The Napier HIS is a set of integrated web-based solutions tailored to the requirements of all grades and sizes of hospitals and health systems in the world, particularly in the US, Asia Pacific, the Middle East and Africa.The Napier Hospital Information System (HIS) is a flexible, affordable and intuitive software solution developed collaboratively with healthcare professionals–including physicians, nurses and pharmacists–and designed to empower them and their peers to make better decisions and enhance patient care and safety, while minimizing costs, resource expenditure and loss of revenue. It also enables healthcare providers to achieve requirements for an electronic health record (EHR), revenue cycle management system and more.Napier HIS is an integrated and scalable web-native platform that optimizes clinical, financial and operational outcomes. Its modular capability supports simple integration with additional clinical and ancillary solutions to support the continuum of care. Developed using healthcare industry standards, Napier HIS also allows seamless integration with third-party IT solutions.`
      }
    ],
    technologies: [
      {
        name: "Javascript",
        experience: "6 years",
        howGoodAmI: "",
        img:
          "https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png"
      },
      {
        name: "HTML5",
        experience: "6 years",
        howGoodAmI: "",
        img: "https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png"
      },
      {
        name: "CSS3",
        experience: "6 years",
        img: "http://www.codekul.com/images/logo_css.png"
      },
      {
        name: "Bootstrap",
        experience: "6 years",
        img: "http://pluspng.com/img-png/bootstrap-png-bootstrap-512.png"
      },
      {
        name: "jQuery",
        experience: "3 years",
        img: "http://pluspng.com/img-png/jquery-logo-png--800.gif"
      },
      {
        name: "Angular JS",
        experience: "4 years",
        img:
          "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg"
      },
      {
        name: "React JS",
        experience: "1 year",
        img: "https://eternitech.com/wp-content/uploads/2016/12/ReactJS.png"
      },
      {
        name: "Ext JS",
        experience: "1 year",
        img: "http://devroar.com/wp-content/uploads/2014/09/extjs_logo.png"
      },
      {
        name: "Can JS",
        experience: "1 year",
        img:
          "data:image/png;base64,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"
      },
      {
        name: "Rx JS",
        experience: "1 year",
        img: "https://avatars1.githubusercontent.com/u/984368?s=400&v=4"
      },
      {
        name: "Java",
        experience: "1 year",
        img:
          "http://diylogodesigns.com/blog/wp-content/uploads/2017/07/java-logo-vector-768x768.png"
      },
      {
        name: "Node JS",
        experience: "1 year",
        img:
          "https://cdn.iconscout.com/public/images/icon/free/png-512/nodejs-logo-36559ec903b263f5-512x512.png"
      }
    ]
  }
};

export const particlesConfig = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 80
      }
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#851e3e",
        blur: 1
      }
    },
    move: {
      enable: false
    }
  }
};

export default profileData;
