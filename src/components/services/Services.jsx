import React, { useState } from 'react'
import "./Services.css"

const Services = () => {
    const [toggle, setToggle] = useState(0)
    const toggleTab = (index) =>{
        setToggle(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title"> Website <br /> Designer </h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggle === 1?"active-modal services__modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>

                        <h3 className="services__modal-title">Website Designer</h3>
                        <p className="services__modal-description">Service with one year of experience. Providing quality work to clients and companies.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal_service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I design the user interface</p>
                            </li>
                            <li className="services__modal_service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Designing user interactions on websites</p>
                            </li>
                            <li className="services__modal_service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">plan, create and code webpages/websites</p>
                            </li>
                            <li className="services__modal_service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">working on a brand new website or updating an already existing site.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Website <br /> Developer </h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggle === 2?"active-modal services__modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>

                        <h3 className="services__modal-title"> Website Developer </h3>
                        <p className="services__modal-description">Service with one year of experience. Providing quality work to clients and companies.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal_service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the user interface</p>
                            </li>
                            <li className="services__modal_service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web page development</p>
                            </li>
                            <li className="services__modal_service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Ensuring websites look good and function properly.</p>
                            </li>
                            <li className="services__modal_service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">working on a brand new website or updating an already existing site.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Backend <br /> Development </h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggle === 3?"active-modal services__modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>

                        <h3 className="services__modal-title">Backend Development </h3>
                        <p className="services__modal-description">Service with one year of experience. Providing quality work to clients and companies.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal_service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Developing servers and databases for website functionality</p>
                            </li>
                            <li className="services__modal_service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Creating, maintaining, testing, and debugging the back end of an application.</p>
                            </li>
                            <li className="services__modal_service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Data and application integration, API, and other processes</p>
                            </li>
                            <li className="services__modal_service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Build the front-end of applications through appealing visual design.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services