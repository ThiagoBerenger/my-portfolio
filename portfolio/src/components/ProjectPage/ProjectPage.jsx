import React from 'react'
import './ProjectPage.modules.css'

import { FaCode } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import projectImage from '../../assets/certificadoFront.jpg'

const ProjectPage = () => {
  return (
    <>
        <div className="projects-container">
            <div className="projects-text">
                <h1>Projetos <FaCode /> </h1>
                <p>Você poderá ver todos os projetos em meu GitHub </p>
            </div>
            <div className="projects-item_container">
                <div className="project-item">
                    <img src={projectImage} alt="Projeto 1" />
                    <div className="item-text">
                        <h4>Unipaz Website</h4>
                        <p>Site sendo desenvolvido para a empresa UNIPAZ Serviços. O intuito do projeto é atualizar a identidade da empresa no ambiente web, com um site atrativo, que traga uma experiência agradável e prática ao usuário.</p>
                    </div>
                </div>
                <div className="project-item">
                    <img src={projectImage} alt="Projeto 2" />
                    <div className="item-text">
                        <h4>Projeto 2</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="project-item">
                    <img src={projectImage} alt="Projeto 3" />
                    <div className="item-text">
                        <h4>Projeto 3</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProjectPage