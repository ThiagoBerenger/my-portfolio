import React from 'react'
import './SkillsSection.modules.css'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";

const SkillsSection = () => {
  return (
    <>
      <div className="skill-container">
        <h1>Tecnologias</h1>
        <div className="techs-container">
            <div className="tech-item">
                <FaHtml5/>
            </div>
            <div className="tech-item">
                <FaCss3Alt/>
            </div>
            <div className="tech-item">
                <IoLogoJavascript/>
            </div>
            <div className="tech-item">
                <FaReact/>
            </div>
            <div className="tech-item">
                <FaBootstrap/>
            </div>
            <div className="tech-item">
                <DiJqueryLogo/>
            </div>
        </div>
      </div>
    </>
  )
}

export default SkillsSection