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
                    <p className="text1">Desarrolladora Full-Stack, Me considero una persona pro activa, creativa, eficiente, flexible al cambio, resiliente, con capacidad de trabajo en equipo, consiente de mis tareas y responsabilidades propias del cargo que este ejecutando, dispuesta ha aprender cada día y compartir mis conocimientos.
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