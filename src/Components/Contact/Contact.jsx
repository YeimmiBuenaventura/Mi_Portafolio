import React, { useState } from "react";
import photo from "./Img/yo.png";
import gmail from "./Img/gmail.png";
import lin from "./Img/linkedin.png";
import git from "./Img/github.png";
import wa from "./Img/whatsapp.png";
import cv from "./Img/cv.png";
import close from "./Img/equis.png";
import curriculum from "./Img/Curriculum.pdf"
import "./Contact.scss"
import LazyLoad from "react-lazy-load";


export const Contact = () =>{
    const [email, openEmail] = useState(false);

    const handChange = () =>{
        openEmail(true)
    }
    const handClose = () =>{
        openEmail(false)
    }

    return(
        <section className="contact">
            <div className="redes">
                <a href="https://www.linkedin.com/in/yeimmi-buenaventura/" title="LinkedIn">
                    <LazyLoad>
                        <img src={lin}  alt="linkedln" className="imgs"/>
                    </LazyLoad>
                </a>
                <a href="https://github.com/YeimmiBuenaventura" title="Github">
                    <LazyLoad>
                        <img src={git} alt="github" className="imgs"/>
                    </LazyLoad>
                </a>
                <button className="gm" onClick={handChange} title="Correo Electrónico">
                    <LazyLoad>
                        <img src={gmail} alt="gmail" className="imgs"/>
                    </LazyLoad>
                </button>
                {email ? (
                    <section className="target">
                        <button className="closes" onClick={handClose}>
                        <LazyLoad>    
                            <img src={close} alt="close" className="close"/>
                        </LazyLoad>
                        </button>
                        <div className="inf">
                            <h3>Email</h3>
                            <p>yeimmipaola@gmail.com</p>
                        </div>
                    </section>
                ): null}
                <a href=" https://wa.me/573052064524" title="WhatsApp">
                <LazyLoad>
                    <img src={wa} alt="whatsapp" className="imgs"/>
                </LazyLoad>
                </a>
                <a href={curriculum} download="CurriculumYeimmiBuenaventura" title="Descarga Mi Curriculum">
                <LazyLoad>
                    <img src={cv} alt="curriculum" className="imgs"/>
                </LazyLoad>
                </a>
            </div>
            <span className="text">“Sueña, crea y desarrolla... <br/>No existe el limite.”</span>
                <img src={photo} alt="me"  className="me"/>
        </section>
    )
}