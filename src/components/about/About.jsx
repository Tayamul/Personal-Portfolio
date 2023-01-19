import React from 'react'
import './about.css'
import me from '../../assets/me3.png'
import {BsAward} from 'react-icons/bs';
import {FaUsers} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="Memoji doing namaste"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon"/>
              <h5>Experience</h5>
              <small>Northcorders Bootcamp</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>3 Completed Projects</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon"/>
              <h5>Interests</h5>
              <small>Reading books, Hiking, Football</small>
            </article>
          </div>

          <p>An ambitious university graduate with a 2:1 degree in Mathematics with Computer Science and a commitment to pursuing a career in Software Development. Self-learning with a hint of bootcamp experience has deepened my knowledge and interests on getting into the tech industry even more. I wish to excel in a front-end dev role, eventually becoming a senior developer. </p>

          <a href="#contact" className='btn btn-primary'>Stay in touch</a>
        </div>
      </div>  
    </section>
  )
}

export default About;