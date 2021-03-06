import React from 'react';
import Tilt from "../components/tilt";
import './portfolio.css';

function Portfolio(props) {
  const options = {
    scale: 1,
    speed: 400,
    max: 30,
    speed: 400,
    glare: true,
    "max-glare": 1,
  };

  return (
    <div className="container-box">
      <div className="container">
        <div className="cards">
        <Tilt className="card" options={options} >
            <div className="content">
              <h3>Dribbble Clone</h3>
              <p>
                This is a clone of the Dribbble website, made with Ruby and 
                Ruby on Rails, including an SQL database and an S3 bucket to host images.
              </p>
              <div className="img-box">
                <img src={require("../images/projects/dribbble-clone.png")} />
              </div>
              <div className="space">
                <a href="https://microverse-dribbble.herokuapp.com/" target="_blank">Live Demo</a>
                <a href="https://github.com/Ceci007/dribbble-clone" target="_blank">GitHub</a>
              </div>
            </div>
          </Tilt>
          <Tilt className="card" options={options} >
            <div className="content">
              <h3>E-Commerce</h3>
              <p>
                This is an E-Commerce site build with React, Redux, and Firebase 
                to simulate an E-Commerce site with stripe integration.
              </p>
              <div className="img-box">
                <img src={require("../images/projects/e-commerce.png")} />
              </div>
              <div className="space">
                <a href="https://crwn-live.herokuapp.com" target="_blank">Live Demo</a>
                <a href="https://github.com/Ceci007/crwn-clothing" target="_blank">GitHub</a>
              </div>
            </div>
          </Tilt>
          <Tilt className="card" options={options} >
            <div className="content">
              <h3>Done With It</h3>
              <p>
                This is a market place for mobile.<br />
                Build with React-Native and Expo.<br />
                Open the link, download the expo app, and scan the code.
              </p>
              <div className="img-box">
                <img src={require("../images/projects/react-native.png")} />
              </div>
              <div className="space">
                <a href="https://expo.io/@cecipeke/DoneWithIt?release-channel=staging" target="_blank">Live Demo</a>
                <a href="https://github.com/Ceci007/done-with-it" target="_blank">GitHub</a>
              </div>
            </div>
          </Tilt>
          <Tilt className="card" options={options} >
            <div className="content">
              <h3>Twitter Clone</h3>
              <p>
                This is a Twitter clone build with a little vanilla JavaScript and CSS.
              </p>
              <div className="img-box">
                <img src={require("../images/projects/twitter-clone.jpg")} />
              </div>
              <div className="space">
                <a href="https://ceci007.github.io/Twitter-Clone/" target="_blank">Live Demo</a>
                <a href="https://github.com/Ceci007/Twitter-Clone" target="_blank">GitHub</a>
              </div>
            </div>
          </Tilt>
          <Tilt className="card" options={options} >
            <div className="content">
              <h3>Custom</h3>
              <p>
                This is a theme build with React.js and styled from scratch.
              </p>
              <div className="img-box">
                <img src={require("../images/projects/custom.jpg")} />
              </div>
              <div className="space">
                <a href="https://ceci007.github.io/custom/" target="_blank">Live Demo</a>
                <a href="https://github.com/Ceci007/custom" target="_blank">GitHub</a>
              </div>
            </div>
          </Tilt>
          <Tilt className="card" options={options} >
            <div className="content">
              <h3>Scoreboard</h3>
              <p>
                This is a videogame scoreboard build with React.js.
              </p>
              <div className="img-box">
                <img src={require("../images/projects/scoreboard.png")} />
              </div>
              <div className="space">
                <a href="https://ceci007.github.io/scoreboard/" target="_blank">Live Demo</a>
                <a href="https://github.com/Ceci007/scoreboard" target="_blank">GitHub</a>
              </div>
            </div>
          </Tilt>
          <Tilt className="card" options={options} >
            <div className="content">
              <h3>Trillo Site</h3>
              <p>
                This is a website template built with CSS and using HTML for styling.
              </p>
              <div className="img-box">
                <img src={require("../images/projects/trillo.jpg")} />
              </div>
              <div className="space">
                <a href="https://ceci007.github.io/trillo-responsive/" target="_blank">Live Demo</a>
                <a href="https://github.com/Ceci007/trillo-responsive" target="_blank">GitHub</a>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;