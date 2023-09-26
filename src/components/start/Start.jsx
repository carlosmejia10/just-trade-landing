import React from "react";
import "./start.scss";

const Start = () => {
    return (
        <div className="start">
            <div className="start__container">
                <div className="start__left">
                    <h2 className="start__title">
                        Como comenzar?
                    </h2>
                    <p className="start__text">
                        Para comenzar trabajar con nosotros, simplemente sigue estos pasos. Estamos atentos a posibles preguntas que puedan suceder en este proceso.
                    </p>
                </div>
                <div className="start__right">
                    <ul className="start__list">
                        <li className="start__item">
                            <span className="start__item-number">1</span>
                            <p className="start__item-text">
                                Registrate en el portal de JustTrade Inv
                            </p>
                        </li>
                        <li className="start__item">
                            <span className="start__item-number">2</span>
                            <p className="start__item-text">
                                Elige tipo de usuario
                            </p>
                        </li>
                        <li className="start__item">
                            <span className="start__item-number">3</span>
                            <p className="start__item-text">
                                Completa fase de verificacion
                            </p>
                        </li>
                        <li className="start__item">
                            <span className="start__item-number">4</span>
                            <p className="start__item-text">
                                Escoge sectores preferenciales
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Start;