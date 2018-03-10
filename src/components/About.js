import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          <b>
            <em>
              Software Enthusiast | Traveller | Writer | Musician | Anime Lover
            </em>
          </b>
        </p>
        <p>I am Software Enthusiast eager to learn on technologies.</p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Mukesh Chandra</span>
              <br />
              <span>
                House No. 372
                <br />Shripuram Colony, Haldwani
                <br /> Nainital - 263139
              </span>
              <br />
              <span>+917619116846</span>
              <br />
              <span>mukesh201722@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a
                href="https://docs.google.com/document/u/1/export?format=pdf&id=17nL5Rm8lh4rUVfRRE1_hqbpyxUUOtKO-fbazmHmRYCI&token=AC4w5VgKrtpNtNGz4xz0sqsr8J1vfi4l8A%3A1520528526768&includes_info_params=true"
                className="button"
              >
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
