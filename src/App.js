import React from "react";
import SkillCards from "./components/SkillCards";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: 1,
          src:
            "https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png",
          name: "React Js"
        },
        {
          id: 2,
          src:
            "https://www.vhv.rs/dpng/d/313-3133777_javascript-transparent-background-svg-hd-png-download.png",
          name: "Javascript"
        },
        {
          id: 3,
          src:
            "https://www.clipartmax.com/png/middle/89-894960_js-discord-bot-logo-node-js-and-react-js.png",
          name: "Node Js"
        },
        {
          id: 4,
          src:
            "https://w7.pngwing.com/pngs/173/36/png-transparent-postgresql-logo-computer-software-database-open-source-s-text-head-snout.png",
          name: "PostgreSQL"
        },
        {
          id: 5,
          src:
            "https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png",
          name: "CSS3"
        },
        {
          id: 6,
          src:
            "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
          name: "HTML5"
        },
        {
          id: 7,
          src:
            "https://e7.pngegg.com/pngimages/522/1018/png-clipart-purple-atom-redux-logo-icons-logos-emojis-tech-companies-thumbnail.png",
          name: "Redux"
        },
        {
          id: 8,
          src: "https://pngimg.com/uploads/mysql/mysql_PNG35.png",
          name: "MySQL"
        },
        {
          id: 9,
          src:
            "https://toppng.com/uploads/preview/9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3.png",
          name: "MongoDB"
        },
        {
          id: 10,
          src:
            "https://toppng.com//public/uploads/preview/bootstrap-featured-image-bootstrap-3-logo-11563293130teouf93qpu.png",
          name: "Bootstrap5"
        },
        {
          id: 11,
          src:
            "https://www.pngfind.com/pngs/m/452-4521456_scss-logo-hd-png-download.png",
          name: "SASS"
        },
        {
          id: 12,
          src:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
          name: "Github"
        },
        {
          id: 13,
          src:
            "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
          name: "Next Js"
        },
        {
          id: 14,
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/768px-Python_logo_01.svg.png",
          name: "Python"
        },
        {
          id: 15,
          src:
            "https://cdn.freebiesupply.com/logos/thumbs/2x/django-community-logo.png",
          name: "Django"
        },
        {
          id: 16,
          src:
            "https://www.kindpng.com/picc/m/641-6417880_transparent-react-native-logo-hd-png-download.png",
          name: "React Native"
        },
        {
          id: 17,
          src:
            "https://www.pikpng.com/pngl/m/446-4460428_electron-js-logo-png-clipart.png",
          name: "Electron Js"
        },
        {
          id: 18,
          src:
            "https://www.artofgeography.com/static/450ebc3e4b1e937dc08901f526cf2bfa/b06ae/gatsby.png",
          name: "Gatsby Js"
        },
        {
          id: 19,
          src:
            "https://www.technisys.com/wp-content/uploads/2021/06/firebase_logo-1.png",
          name: "Firebase"
        },
        {
          id: 20,
          src:
            "https://www.liblogo.com/img-logo/he246h752-heroku-logo-heroku-original-wordmark-logo-free-icon-of-devicon.png",
          name: "Heroku"
        },
        {
          id: 21,
          src: "https://www.netlify.com/v3/img/components/logomark-light.png",
          name: "Netlify"
        }
      ]
    };
  }

  render() {
    const { skills } = this.state;

    return (
      <div className="App">
        <h1>MySkills</h1>
        <SkillCards skills={skills} />
      </div>
    );
  }
}

export default App;
