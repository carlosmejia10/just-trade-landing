import React from "react";
import "./join.scss";
import LogoJoin from "../../images/logoJoin.png"

const Join = () => {
    return (
        <div className="join">
            <div className="join__container">
                <div className="join__left">
                    <h2 className="join__title">
                        Permita que su comunidad participe en la <span className="join__title-focus">inversión a gran escala.</span>
                    </h2>
                    <p className="join__text">
                        Atraiga fondos que oscilen entre 50,000 y más de 5 millones de dólares de cientos de clientes, seguidores y amigos, todo mediante una única entrada en su plan de financiamiento.
                    </p>
                    <input placeholder="Nombre de la empresa.." type="text" className="join__input" />
                </div>
                <div className="join__right">
                    <img src={LogoJoin} alt="Logo" className="join__img" />
                    <a href="#" className="join__button">
                        Solicitar recaudacion
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Join;