import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import Coffee from "../assets/images/portfolio/coffee.jpg";
import Console from "../assets/images/portfolio/console.jpg";
import Judah from "../assets/images/portfolio/judah.jpg";
import IntoTheLight from "../assets/images/portfolio/into-the-light.jpg";
import Farmerboy from "../assets/images/portfolio/farmerboy.jpg";
import Girl from "../assets/images/portfolio/girl.jpg";
import Origami from "../assets/images/portfolio/origami.jpg";
import Retrocam from "../assets/images/portfolio/retrocam.jpg";

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Works.</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-01" title="">
                <img alt="" src={Coffee} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Coffee</h5>
                    <p>Illustrration</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-02" title="">
                <img alt="" src={Console} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Console</h5>
                    <p>Web Development</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-03" title="">
                <img alt="" src={Judah} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Judah</h5>
                    <p>Webdesign</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-04" title="">
                <img alt="" src={IntoTheLight} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Into The Light</h5>
                    <p>Photography</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-05" title="">
                <img alt="" src={Farmerboy} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Farmer Boy</h5>
                    <p>Branding</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-06" title="">
                <img alt="" src={Girl} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Girl</h5>
                    <p>Photography</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-07" title="">
                <img alt="" src={Origami} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Origami</h5>
                    <p>Illustrration</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-08" title="">
                <img alt="" src={Retrocam} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Retrocam</h5>
                    <p>Web Development</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
