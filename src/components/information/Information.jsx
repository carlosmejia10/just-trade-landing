import React from "react";
import "./information.scss";
import Graph from "../../images/graphInformation.png"

const Information = () => {
    return (
        <div className="information">
            <div className="information__container">
                <div className="information__left">
                    <h2 className="information__title">
                        Toda la <span className="information__title-focus">información</span> en tus manos!
                    </h2>
                    <p className="information__text">
                        Ofrecemos informacion precisa actualizada en el tiempo real visualizadas en la forma que quieras: graficas, estadisticas, tablas. Todo esto para brindarles los recursos necesarios para empezar a invertir con nosotros.
                    </p>
                    <a href="#" className="information__button">
                        Empieza aqui
                    </a>
                </div>
                <div className="information__right">
                    <img src={Graph} alt="Graph" className="information__img" />
                </div>
            </div>
            <div className="information__contact">
                <div className="information__contact-left">
                    <h2 className="information__contact-title">
                        Comunicate con nuestro equipo
                    </h2>
                    <p className="information__contact-text">
                        Estamos felices de brindarles informacion sobre los servicios. Ademas, estamos abiertos a sugerencias y reclamos
                    </p>
                </div>
                <div className="information__contact-right">
                    <a href="#" className="information__contact-button">
                        Contactanos
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Information;