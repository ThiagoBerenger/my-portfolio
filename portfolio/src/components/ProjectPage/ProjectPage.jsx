import React, { useRef, useState } from 'react'
import './ProjectPage.modules.css'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';

// ----

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
            <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper3"
      >
        <SwiperSlide>
            <div className="project-item">
                <h1>um</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="project-item">
                <h1>dois</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="project-item">
                <h1>três</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="project-item">
                <h1>quatro</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="project-item">
                <h1>cinco</h1>
            </div>
        </SwiperSlide>
      </Swiper>
            </div>
        </div>
    </>
  )
}

export default ProjectPage