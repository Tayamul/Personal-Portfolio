import React from "react";
import "./about.css";
import me from "../../assets/me3.png";
import { BsAward } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="Memoji doing namaste" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experience</h5>
              <small>Northcorders Bootcamp</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5 Completed Projects</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Interests</h5>
              <small>Reading books, Hiking, Football</small>
            </article>
          </div>

          <p>
            As a highly skilled coding bootcamp graduate with diverse expertise
            in multiple coding languages, I have demonstrated proficiency in
            developing web applications and creating websites from scratch.
            While I specialize in React, I am constantly seeking to expand my
            knowledge and skill set by exploring new programming languages and
            taking on coding challenges that push me out of my comfort zone. My
            ultimate goal is to pursue a career in Software Development, with a
            focus on front-end development, and achieve excellence as a
            front-end developer. Looking forward, I aspire to continue growing
            and advancing, ultimately achieving the status of a senior
            developer.{" "}
          </p>

          <a href="#contact" className="btn btn-primary">
            Stay in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
