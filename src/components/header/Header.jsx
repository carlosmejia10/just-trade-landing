import React from "react";
import "./header.scss"
import HeaderLeft from "../../images/headerLeft.png"
import HeaderRight from "../../images/headerRight.png"
import Facebook from "../../images/facebook.png"
import Twitter from "../../images/twitter.png"
import Instagram from "../../images/instagram.png"
import Waves from "../../images/waves.png"

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__left">
                    <img src={HeaderLeft} alt="HeaderLeft" className="header__left-img" />
                </div>
                <div className="header__content">
                    <div className="header__content-titles">
                        <h2 className="header__content-title">
                            easy startups
                        </h2>
                        <h2 className="header__content-title">
                            Investment
                        </h2>
                    </div>
                    <p className="header__content-text">
                    Empieza a invertir en las mejores startups de America Latina con gran perspectivas de crecimiento!
                    </p>
                    <ul className="header__content-list">
                        <li className="header__content-item">
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="header__content-link">
                                <img src={Facebook} alt="Facebook" className="header__content-link-img" />
                            </a>
                        </li>
                        <li className="header__content-item">
                            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="header__content-link">
                                <img src={Twitter} alt="Twitter" className="header__content-link-img" />
                            </a>
                        </li>
                        <li className="header__content-item">
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="header__content-link">
                                <img src={Instagram} alt="Instagram" className="header__content-link-img" />
                            </a>
                        </li>
                    </ul>
                    <img src={Waves} alt="Wave" className="header__content-wave" />
                </div>
                <div className="header__right">
                    <img src={HeaderRight} alt="Header right" className="header__right-img" />
                </div>
            </div>
        </div>
    )
}

export default Header;