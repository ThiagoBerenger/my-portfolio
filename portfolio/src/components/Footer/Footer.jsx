import React from 'react'
import './Footer.modules.css'

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";



const Footer = () => {
  return (
    <>
        <div className="footer-content">
            <div className="footer-content_name">
                <h4>Thiago Berenger</h4>
                <p>Email: thberenger27@gmail.com <br />
                Rio de Janeiro - RJ</p>
            </div>
            <div className="footer-content_social">
                <h4>Redes Sociais</h4>
                <div className="social-icons">
                    <FaLinkedin/>
                    <FaGithubSquare/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer