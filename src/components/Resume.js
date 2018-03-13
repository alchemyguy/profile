import React from "react";

import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";
import OpenSource from "./OpenSource";

const Resume = () => (
  <section id="resume">
    <Education />
    <Work />
    <Skills />
    <OpenSource />
  </section>
);

export default Resume;
