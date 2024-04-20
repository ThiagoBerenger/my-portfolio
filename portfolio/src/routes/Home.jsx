import React from 'react'

import "../components/HomePage/HomePage.modules.css"

import fotoGit from "../assets/fotoGit.jpg"

// icons
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiJquery } from "react-icons/si";

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <div className="home-container_text">
          <h1>Thiago Berenger</h1>
          <h4>Front-end Developer</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est labore similique neque praesentium et voluptatum error laborum expedita modi incidunt, dignissimos atque eos accusantium harum, exercitationem consequuntur eius maxime magnam!</p>
        </div>
          <div className='home-container_image'>
            <img src={fotoGit} alt="foto"/>
          </div>
      </div>
      
      <div className = "technology-container">
          <div className="technology-icons">
              <FaHtml5/>
              <FaCss3Alt/>
              <IoLogoJavascript/>
              <FaReact/>
              <FaBootstrap/>
              <SiJquery/>
          </div>
      </div>
    </>
    
  )
}

export default Home