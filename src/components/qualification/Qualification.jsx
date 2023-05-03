import React, { useState } from 'react'
import "./Qualification.css"

const Qualification = () => {
    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) =>{
        setToggle(index);
    }

  return (
    <section className="qualification section" >
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggle === 1?"qualification__button qualification__active button--flex":"qualification__button button--flex"} onClick={()=>toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div className={toggle === 2?"qualification__button qualification__active button--flex":"qualification__button button--flex"} onClick={()=>toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggle === 1 ? "qualification__content qualification__content-active":"qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B-tech CSE </h3>
                            <span className="qualification__subtitle">Galgotias University</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2019 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Higher Secondary </h3>
                            <span className="qualification__subtitle">Modern Era Public School, Bijnor</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2017 - 2019
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title"> Lower Secondary / Matriculation</h3>
                            <span className="qualification__subtitle">Modern Era Public School, Bijnor</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2005 - 2017
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div className={toggle === 2 ? "qualification__content qualification__content-active":"qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Technical Content Writer </h3>
                            <span className="qualification__subtitle">Funoppia</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                Nov 2021 - Jan 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Web Development Intern</h3>
                            <span className="qualification__subtitle">LetsGrowMore</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                Sep 2021 - Oct 2021
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Python for ML/AI Intern </h3>
                            <span className="qualification__subtitle">Elite Techno Groups</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                Aug 2021 - Sep 2021
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
              
                </div>

            </div>
        </div>
    </section>
  )
}

export default Qualification