import React from "react";
import "./gains.scss";
import GainsOne from '../../images/gainsOne.png'
import GainsTwo from '../../images/gainsTwo.png'
import GainsThree from '../../images/gainsThree.png'

const Gains = () => {
    return (
        <div className="gains">
            <div className="gains__container">
                <div className="gains__textbox">
                    <h2 className="gains__title">
                        Nuestros beneficios
                    </h2>
                    <p className="gains__text">
                        Pensamos en brindarles los mejores beneficios a usted y a empresas latinoamericanas
                    </p>
                </div>
                <ul className="gains__list">
                    <li className="gains__item">
                        <img src={GainsOne} alt="gains one" className="gains__item-image" />
                        <h3 className="gains__item-title">
                            Capital
                        </h3>
                        <p className="gains__item-text">
                            Con nuestro programa de obtencion de capital para startups podra obtener financiamiento con las menores comisiones posibles. Intenta realizar los objetivos mas ambiciosos!
                        </p>
                    </li>
                    <li className="gains__item">
                        <img src={GainsTwo} alt="gains two" className="gains__item-image" />
                        <h3 className="gains__item-title">
                            Ganancias
                        </h3>
                        <p className="gains__item-text">
                            Invirtiendo en las mejores startups de America Latina podras llegar a resultados impresionantes. Te ayudaremos en este proceso por programas de educacion y demo billetera, para invertir sin riesgos
                        </p>
                    </li>
                    <li className="gains__item">
                        <img src={GainsThree} alt="gains three" className="gains__item-image" />
                        <h3 className="gains__item-title">
                            Educación
                        </h3>
                        <p className="gains__item-text">
                            Ofrecemos cursos de aprendizaje gratuitos que te ayudaran a entrar al mundo de inversiones.
                            Ademas, brindamos cursos pagos con tecnicas mas avanzadas y efectivas que incluyen un mes de seguimiento por nuestros especialistas
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Gains;