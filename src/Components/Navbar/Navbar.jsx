import React from "react";
import "./Navbar.scss"
import flecha from "./Img/flechaAbajo.png"

export const Navbar = () => {


    return (
        <section>
            <section className="mee">
                <button className="about"> About Me <img src={flecha} alt="flecha" className="flecha"/>
                </button>
                    <div className="openAbout animate">
                        <span className="open">Desarrolladora Full-Stack, egresada Educamas, con diplomados en programación otorgados por el mniesterio de las TIC'S, Universidad de Caldas, Ingeniera ambiental, Tecnóloga ambiental, con diversos conocimientos propios del area ambiental, uso de herramientas ofimáticas, saberes empíricos en contabilidad y administración además de manejo intermedio del segundo idioma (Ingles).
                        Me considero una persona pro activa, creativa, eficiente, flexible al cambio, resiliente, con capacidad de trabajo en equipo, consiente de mis tareas y responsabilidades propias del cargo que este ejecutando, dispuesta a aprender cada día y a compartir mis conocimientos en pro de cumplir metas personales y de la compañía.</span>
                    </div>
                <button className="project">Projects <img src={flecha} alt="flecha" className="flecha"/> 
                </button>
            </section>
        </section>
    );
} 