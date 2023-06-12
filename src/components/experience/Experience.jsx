import React from "react";
import "./experience.css";
// import { BsPatchCheckFill } from "react-icons/bs";
import { FaNode } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMaterialui } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoLogoHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML5</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiMaterialui className="experience__details-icon" />
              <div>
                <h4>Material UI</h4>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNode className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <div>
                <h4>Express</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiPostgresql className="experience__details-icon" />
              <div>
                <h4>PSQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiFirebase className="experience__details-icon" />
              <div>
                <h4>Firebase</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
