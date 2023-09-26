import React from "react";
import "./footer.scss";
import FooterLogo from '../../images/footerLogo.png'
import Phone from '../../images/phone.png'
import Evelope from '../../images/evelope.png'
import FacebookFooter from '../../images/facebookFooter.svg'
import TwitterFooter from '../../images/twitterFooter.svg'
import LinkedInFooter from '../../images/linkedInFooter.svg'
import InstagramFooter from '../../images/instagramFooter.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__top">
                    <img src={FooterLogo} alt="Footer logo" className="footer__logo" />
                    <h2 className="footer__label">JustTrade</h2>
                </div>
                <div className="footer__content">
                    <div className="footer__left">
                        <h3 className="footer__suggestions">
                            Envianos tus sugerencias
                        </h3>
                        <input type="text" placeholder="Sugerencias.." className="footer__input" />
                    </div>
                    <div className="footer__middle">
                        <h3 className="footer__title">
                            Compañia
                        </h3>
                        <ul className="footer__middle-list">
                            <li className="footer__middle-item">
                                <a href="#" className="footer__middle-item-link">
                                    Sobre nosotros
                                </a>
                            </li>
                            <li className="footer__middle-item">
                                <a href="#" className="footer__middle-item-link">
                                    Politica JustTrade
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__right">
                        <h3 className="footer__title">
                            Contactanos
                        </h3>
                        <ul className="footer__right-list">
                            <li className="footer__right-item">
                                <img src={Phone} alt="Contact" className="footer__right-item-img" />
                                <a href="tel:+5732293939399" className="footer__right-item-link">
                                    +5732293939399
                                </a>
                            </li>
                            <li className="footer__right-item">
                                <img src={Evelope} alt="Contact" className="footer__right-item-img" />
                                <a href="mailto:justtrade@gmail.com" className="footer__right-item-link">
                                    justtrade@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__social">
                    <ul className="footer__social-list">
                        <li className="footer__social-item">
                            <a href="#" className="footer__social-link">
                                <img src={FacebookFooter} alt="fb" className="footer__social-img" />
                            </a>
                        </li>
                        <li className="footer__social-item">
                            <a href="#" className="footer__social-link">
                                <img src={TwitterFooter} alt="twitter" className="footer__social-img" />
                            </a>
                        </li>
                        <li className="footer__social-item">
                            <a href="#" className="footer__social-link">
                                <img src={LinkedInFooter} alt="linkedin" className="footer__social-img" />
                            </a>
                        </li>
                        <li className="footer__social-item">
                            <a href="#" className="footer__social-link">
                                <img src={InstagramFooter} alt="instagram" className="footer__social-img" />
                            </a>
                        </li>
                    </ul>
                </div>
                <p className="footer__copyrights">
                    © 2023 JustTrade Investments
                </p>
            </div>
        </div>
    )
}

export default Footer;