import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>Skill Description Here</p>

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand laravel" />
            <em>laravel & Lumen</em>
          </li>
          <li>
            <span className="bar-expand wordpress" />
            <em>Wordpress</em>
          </li>
          <li>
            <span className="bar-expand css" />
            <em>CSS</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>HTML5</em>
          </li>
          <li>
            <span className="bar-expand illustrator" />
            <em>Illustrator</em>
          </li>
          <li>
            <span className="bar-expand nodejs" />
            <em>Nodejs</em>
          </li>
          <li>
            <span className="bar-expand git" />
            <em>Tools: Git , GitLab , GitHub , Trello, Apache</em>
          </li>
          <li>
            <span className="bar-expand django" />
            <em>Django</em>
          </li>
          <li>
            <span className="bar-expand extension" />
            <em>Web Extensions (Chrome, FireFox, IE)</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
