import React from 'react'

import './HeroSection.modules.css'

// technologies
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";

import fotoGit from '../../assets/fotoGit.jpg'
import devImage from '../../assets/devImage.svg'

const HeroSection = () => {
  return (
    <>
        <div className="hero-section">
          <div className="hero-section_text">
            <h1>Thiago Berenger</h1>
            <h3>Desenvolvedor Front-end</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor impedit pariatur facilis, beatae id, saepe, omnis vitae labore unde in praesentium amet quidem accusantium repellat ducimus dolorum optio culpa.</p>
          </div>
          <div className="hero-section_image">
            <img src={devImage} alt="Picture" />
            <div className="tech-container">
              <FaHtml5/>
              <FaCss3Alt/>
              <IoLogoJavascript/>
              <FaReact/>
              <FaBootstrap/>
              <DiJqueryLogo/>
            </div>
          </div>
        </div>
          <div className="about-container">

          </div>
    </>
  )
}

export default HeroSection