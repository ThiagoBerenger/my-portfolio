import React from 'react'

import './HeroSection.modules.css'

import fotoGit from '../../assets/fotoGit.jpg'

const HeroSection = () => {
  return (
    <>
        <div className="hero-section">
          <div className="hero-section_text">
            <h1>Thiago Berenger</h1>
            <h2>Desenvolvedor Front-end</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor impedit pariatur facilis, beatae id, saepe, omnis vitae labore unde in praesentium amet quidem accusantium repellat ducimus dolorum optio culpa.</p>
          </div>
          <div className="hero-section_image">
            <img src={fotoGit} alt="Picture" />
          </div>
        </div>
    </>
  )
}

export default HeroSection