import { useState } from "react";
import "./Navbar.scss"
import { MyProjects } from "../Projects/Projects";

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
                <button className="about" onClick={handleAbout}> About Me
                </button>
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
                                        <p className="text2"> Here SKILLS...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ) : null}
                <button className="project" onClick={handleProject}>Projects
                </button>
                {mine ? <MyProjects /> : null}

            </section>
        </section>
    );
} 