import { useState } from "react";
import { MyProjects } from "../Projects/Projects";
import html from "./Img/html.png";
import css from "./Img/css.png"
import js from "./Img/js.png"
import react from "./Img/atom.png"
import boot from "./Img/bootstrap.png"
import node from "./Img/nodejs.png"
import java from "./Img/java.png"
import python from "./Img/python.png"
import mongo from "./Img/mongodb.png"
import sql from "./Img/mysql.png"
import git from "./Img/github.png"
import figma from "./Img/figma.png"
import "./Navbar.scss";

export const Navbar = () => {
    const [mine, setMine] = useState(false);
    const [open, setOpen] = useState(false);

    const handleAbout = () => {
        setOpen(true);
        setMine(false);
    }

    const handleProject = () => {
        setMine(true);
        setOpen(false);
    }

    return (
        <section>
            <section className="mee">
                <div className="about">
                    <button className="" onClick={handleAbout}> About Me
                </button>
                </div>
                {open ? (<div className="card animate">
                    <p className="text1">Soy Ingeniera Ambiental y Desarrolladora Web Fullstack con
                        MERN y cuento con conocimientos básicos JAVA.
                        Me considero una persona con una fuerte ética laboral, empática,
                        resiliente, con buena capacidad de escucha y trabajo en equipo; he
                        desarrollado algunos proyectos en grupo, caracterizándome como
                        una persona organizada y flexible al cambio, lo que a su vez me ha
                        permitido trabajar de manera independiente en estas áreas.
                        Esto me ha motivado a aprender y a retarme para adquirir más
                        conocimientos en el área TI, siendo esta es una de mis grandes
                        pasiones.

                    </p>
                    <div className="one">
                        <div className="two">
                            <div className="three">
                                <div className="four">
                                    <div className="five">
                                        <div className="text2"> 
                                                <h1>HARD SKILLS</h1>
                                                <div className="skills">
                                                    <span ><img src={html} alt="HTML" title="HTML" className="imgS"/></span>
                                                    <span ><img src={css} alt="CSS" title="CSS" className="imgS"/></span>
                                                    <span ><img src={js} alt="JS" title="Javascript" className="imgS"/></span>
                                                    <span ><img src={react} alt="React" title="React" className="imgS"/></span>
                                                    <span ><img src={boot} alt="Bootstrap" title="Bootstrap" className="imgS"/></span>
                                                    <span ><img src={mongo} alt="Mongodb" title="MongoDB" className="imgS"/></span>
                                                    <span ><img src={sql} alt="MySQL" title="MySQL" className="imgS"/></span>
                                                    <span ><img src={java} alt="Java" title="Java" className="imgS"/></span>
                                                    <span ><img src={node} alt="Node.js" title="Node.js" className="imgS"/></span>
                                                    <span ><img src={python} alt="Python" title="Python" className="imgS"/></span>
                                                    <span ><img src={git} alt="Github" title="Github" className="imgS"/></span>
                                                    <span ><img src={figma} alt="Figma" title="Figma" className="imgS"/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ) : null}
                <div className="project">
                    <button className="" onClick={handleProject}>Projects
                </button>
                </div>
                {mine ? <MyProjects /> : null}

            </section>
        </section>
    );
} 