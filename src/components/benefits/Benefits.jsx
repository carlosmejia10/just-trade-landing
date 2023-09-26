import React from "react";
import "./benefits.scss";
import BenefitsLeft from "../../images/benefitsLeft.png"
import TwoArrows from "../../images/twoArrows.png"

const Benefits = () => {
    return (
        <div className="benefits">
            <div className="benefits__container">
                <div className="benefits__left">
                    <img src={BenefitsLeft} alt="Benefits" className="benefits__left-img" />
                </div>
                <div className="benefits__right">
                    <h2 className="benefits__right-title">Obten ganancias como cliente regular o startup!</h2>
                    <p className="benefits__right-text">
                        Con nosotros obtiene beneficios como cliente al invertir en las startups mas perspectivas de America Latina. Ofrecemos servicios de educacion gratuitos, los cuales ayudaran a entender el mejor el mercado de startups.
                        Si tienes un negocio podras obtener financiación y promover al negocio dentro de la comunidad que ofrecemos, obteniendo capital necesario para las ideas innovadoras que tienen en mente.
                    </p>
                    <ul className="benefits__right-list">
                        <li className="benefits__right-item">
                            <img src={TwoArrows} alt="Arrow" className="benefits__right-item-img" />
                            <p className="benefits__right-item-text">
                                Inversion como cliente
                            </p>
                        </li>
                        <li className="benefits__right-item">
                            <img src={TwoArrows} alt="Arrow" className="benefits__right-item-img" />
                            <p className="benefits__right-item-text">
                                Obtencion de capital de riesgo como startup
                            </p>
                        </li>
                        <li className="benefits__right-item">
                            <img src={TwoArrows} alt="Arrow" className="benefits__right-item-img" />
                            <p className="benefits__right-item-text">
                                Tendencias de mercado de startups
                            </p>
                        </li>
                    </ul>
                    <a href="#" className="benefits__right-button">
                        Leer mas
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Benefits;