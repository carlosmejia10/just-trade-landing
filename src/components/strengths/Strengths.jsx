import React from "react";
import "./strengths.scss";

const Strengths = () => {
    return (
        <div className="strengths">
            <div className="strengths__container">
                <ul className="strengths__list">
                    <li className="strengths__item">
                        <h3 className="strengths__item-title">
                            Capital flexible
                        </h3>
                        <p className="strengths__item-text">
                            Empieza a invertir en las startups mas prometedoras de America Latina con solo <span className="strengths__focus">10 dolares</span>.
                        </p>
                    </li>
                    <li className="strengths__item">
                        <h3 className="strengths__item-title">
                            Comisiones
                        </h3>
                        <p className="strengths__item-text">
                            En tus transacciones realizadas cobraremos solo el <span className="strengths__focus">3%</span> del capital invertido
                        </p>
                    </li>
                    <li className="strengths__item">
                        <h3 className="strengths__item-title">
                            Facilidad y disponibilidad
                        </h3>
                        <p className="strengths__item-text">
                            Invierte en cualquier momento desde cualquier dispositivo en un instante
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Strengths;