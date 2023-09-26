import React from "react";
import "./team.scss";
import Slider from "react-slick";
import Person from '../../images/person.png'
import User from '../../images/user.png'
import Chat from '../../images/chat.png'
import Calendar from '../../images/calendar.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    }
    return (
        <div className="team">
            <div className="team__container">
                <div className="team__textcont">
                    <h2 className="team__title">
                        Equipo de <span className="team__title-focus">JustTrade</span>
                    </h2>
                    <p className="team__text">
                        Con nuestro equipo de profesionales podra llegar a las metas de negocio que tienen de manera rapida y efectiva
                    </p>
                </div>
                <Slider {...settings} className="team__slider">
                    <div className="team__slider-slide">
                        <img src={Person} alt="Slide" className="team__slider-slide-img" />
                        <div className="team__slider-slide-info">
                            <div className="team__slider-slide-textcont">
                                <h3 className="team__slider-slide-name">Anton Patrignani</h3>
                                <p className="team__slider-slide-role">CEO</p>
                            </div>
                            <div className="team__slider-slide-contact">
                                <img src={Calendar} alt="contact link" className="team__slider-slide-contact-img" />
                                <img src={User} alt="contact link" className="team__slider-slide-contact-img" />
                                <img src={Chat} alt="contact link" className="team__slider-slide-contact-img" />
                            </div>
                        </div>
                    </div>
                    <div className="team__slider-slide">
                        <img src={Person} alt="Slide" className="team__slider-slide-img" />
                        <div className="team__slider-slide-info">
                            <div className="team__slider-slide-textcont">
                                <h3 className="team__slider-slide-name">Anton Patrignani</h3>
                                <p className="team__slider-slide-role">CEO</p>
                            </div>
                            <div className="team__slider-slide-contact">
                                <img src={Calendar} alt="contact link" className="team__slider-slide-contact-img" />
                                <img src={User} alt="contact link" className="team__slider-slide-contact-img" />
                                <img src={Chat} alt="contact link" className="team__slider-slide-contact-img" />
                            </div>
                        </div>
                    </div>
                    <div className="team__slider-slide">
                        <img src={Person} alt="Slide" className="team__slider-slide-img" />
                        <div className="team__slider-slide-info">
                            <div className="team__slider-slide-textcont">
                                <h3 className="team__slider-slide-name">Anton Patrignani</h3>
                                <p className="team__slider-slide-role">CEO</p>
                            </div>
                            <div className="team__slider-slide-contact">
                                <img src={Calendar} alt="contact link" className="team__slider-slide-contact-img" />
                                <img src={User} alt="contact link" className="team__slider-slide-contact-img" />
                                <img src={Chat} alt="contact link" className="team__slider-slide-contact-img" />
                            </div>
                        </div>
                    </div>
                    <div className="team__slider-slide">
                        <img src={Person} alt="Slide" className="team__slider-slide-img" />
                        <div className="team__slider-slide-info">
                            <div className="team__slider-slide-textcont">
                                <h3 className="team__slider-slide-name">Anton Patrignani</h3>
                                <p className="team__slider-slide-role">CEO</p>
                            </div>
                            <div className="team__slider-slide-contact">
                                <img src={Calendar} alt="contact link" className="team__slider-slide-contact-img" />
                                <img src={User} alt="contact link" className="team__slider-slide-contact-img" />
                                <img src={Chat} alt="contact link" className="team__slider-slide-contact-img" />
                            </div>
                        </div>
                    </div>
                    <div className="team__slider-slide">
                        <img src={Person} alt="Slide" className="team__slider-slide-img" />
                        <div className="team__slider-slide-info">
                            <div className="team__slider-slide-textcont">
                                <h3 className="team__slider-slide-name">Anton Patrignani</h3>
                                <p className="team__slider-slide-role">CEO</p>
                            </div>
                            <div className="team__slider-slide-contact">
                                <img src={Calendar} alt="contact link" className="team__slider-slide-contact-img" />
                                <img src={User} alt="contact link" className="team__slider-slide-contact-img" />
                                <img src={Chat} alt="contact link" className="team__slider-slide-contact-img" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Team;