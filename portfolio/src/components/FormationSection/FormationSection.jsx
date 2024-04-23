import React from 'react'
import './FormationSection.modules.css'

import certificadoFront from '../../assets/certificadoFront.jpg'
import rocketImage from '../../assets/rocketImage.svg'

const FormationSection = () => {
  return (
    <>
        <div className="formation-container">
            <div className="certificates_container">
                <h1>Certificados</h1>
                <div className="certificate-item_container">
                    <div className="certificate-item_box">
                        <div className="certificate-item">
                            <img src={certificadoFront} alt="Certificado Front-End" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consequatur delectus deserunt perspiciatis</p>
                        </div>
                        <div className="certificate-item">
                            <img src={certificadoFront} alt="Certificado Full-Stack" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consequatur delectus deserunt perspiciatis</p>
                        </div>
                    </div>
                        <div className="certificate-image">
                            <img src={rocketImage} alt="Certificate" />
                        </div>
                </div>


            </div>   

        </div>
    </>
  )
}

export default FormationSection