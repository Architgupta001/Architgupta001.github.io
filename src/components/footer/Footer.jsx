import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Archit</h1>

            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">

                <a href="https://www.instagram.com/archit.851/" className="footer__social-link" target='_blank'  rel="noreferrer">
                    <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/archit-gupta-021b801a2/" className="footer__social-link" target='_blank'  rel="noreferrer"> 
                    <i className="bx bxl-linkedin-square"></i>
                </a>
                <a href="https://github.com/Architgupta001" className="footer__social-link" target='_blank'  rel="noreferrer">
                    <i className="bx bxl-github"></i>
                </a>
                <a href="https://twitter.com/" className="footer__social-link" target='_blank'  rel="noreferrer">
                    <i className="bx bxl-twitter"></i>
                </a>
            </div>  
            <span className="footer__copy">&#169; Archit Gupta. All right reserved</span>
        </div>
    </footer>
  )
}

export default Footer