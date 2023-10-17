import React from "react";
import "./clients.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientTestimonial from '../../images/clientTestimonial.png'
import ClientOne from '../../images/clientOne.png'
import ClientTwo from '../../images/clientTwo.png'
import ClientThree from '../../images/clientThree.png'
import PrevArrow from '../../images/prevArrow.png'
import NextArrow from '../../images/nextArrow.png'

const Clients = () => {
    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
          <img
            src={NextArrow}
            alt="Next arrow"
            className={`next-arrow-st ${className}`}
            style={{
                display: "block",
                width: "50px",
                marginTop: "200px",
                left: "7%",
                top: "60%",
            }}
            onClick={onClick}
          />
        );
      }

      function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
          <img
            src={PrevArrow}
            alt="Prev arrow"
            className={className}
            style={{
                display: "block",
                width: "50px",
                marginTop: "200px",
                left: "1%",
                top: "60%",
                zIndex: "1",
            }}
            onClick={onClick}
          />
        );
      }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
              },
        ]
    }

    return (
        <div className="clients">
            <div className="clients__container">
                <div className="clients__textcont">
                    <p className="clients__subtitle">Testimonios</p>
                    <h2 className="clients__title">
                        Nuestros <span className="clients__title-focus">Clientes</span>
                    </h2>
                </div>
                <Slider {...settings} className="clients__slider">
                    <div className="clients__slider-slide">
                        <div className="clients__slider-slide-container">
                            <img src={ClientTestimonial} alt="Client" className="clients__slider-slide-img" />
                            <div className="clients__slider-slide-right">
                                <p className="clients__slider-slide-text">
                                    Con ustedes pude alcanzar el suficiente capital para realizar mi idea como Startup! Y todo esto con apoyo constante y bajas comisiones!
                                </p>
                                <p className="clients__slider-slide-client">
                                    Joe Root
                                </p>
                                <p className="clients__slider-slide-about">
                                    Cliente feliz
                                </p>
                                <ul className="clients__slider-slide-gallery">
                                    <li className="clients__slider-slide-item">
                                        <img src={ClientOne} alt="Client min" className="clients__slider-slide-item-img" />
                                    </li>
                                    <li className="clients__slider-slide-item">
                                        <img src={ClientTwo} alt="Client min" className="clients__slider-slide-item-img" />
                                    </li>
                                    <li className="clients__slider-slide-item">
                                        <img src={ClientThree} alt="Client min" className="clients__slider-slide-item-img" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="clients__slider-slide">
                        <div className="clients__slider-slide-container">
                            <img src={ClientTestimonial} alt="Client" className="clients__slider-slide-img" />
                            <div className="clients__slider-slide-right">
                                <p className="clients__slider-slide-text">
                                    Con ustedes pude alcanzar el suficiente capital para realizar mi idea como Startup! Y todo esto con apoyo constante y bajas comisiones!
                                </p>
                                <p className="clients__slider-slide-client">
                                    Joe Root
                                </p>
                                <p className="clients__slider-slide-about">
                                    Cliente feliz
                                </p>
                                <ul className="clients__slider-slide-gallery">
                                    <li className="clients__slider-slide-item">
                                        <img src={ClientOne} alt="Client min" className="clients__slider-slide-item-img" />
                                    </li>
                                    <li className="clients__slider-slide-item">
                                        <img src={ClientTwo} alt="Client min" className="clients__slider-slide-item-img" />
                                    </li>
                                    <li className="clients__slider-slide-item">
                                        <img src={ClientThree} alt="Client min" className="clients__slider-slide-item-img" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="clients__slider-slide">
                        <div className="clients__slider-slide-container">
                            <img src={ClientTestimonial} alt="Client" className="clients__slider-slide-img" />
                            <div className="clients__slider-slide-right">
                                <p className="clients__slider-slide-text">
                                    Con ustedes pude alcanzar el suficiente capital para realizar mi idea como Startup! Y todo esto con apoyo constante y bajas comisiones!
                                </p>
                                <p className="clients__slider-slide-client">
                                    Joe Root
                                </p>
                                <p className="clients__slider-slide-about">
                                    Cliente feliz
                                </p>
                                <ul className="clients__slider-slide-gallery">
                                    <li className="clients__slider-slide-item">
                                        <img src={ClientOne} alt="Client min" className="clients__slider-slide-item-img" />
                                    </li>
                                    <li className="clients__slider-slide-item">
                                        <img src={ClientTwo} alt="Client min" className="clients__slider-slide-item-img" />
                                    </li>
                                    <li className="clients__slider-slide-item">
                                        <img src={ClientThree} alt="Client min" className="clients__slider-slide-item-img" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="clients__slider-slide">
                        <div className="clients__slider-slide-container">
                            <img src={ClientTestimonial} alt="Client" className="clients__slider-slide-img" />
                            <div className="clients__slider-slide-right">
                                <p className="clients__slider-slide-text">
                                    Con ustedes pude alcanzar el suficiente capital para realizar mi idea como Startup! Y todo esto con apoyo constante y bajas comisiones!
                                </p>
                                <p className="clients__slider-slide-client">
                                    Joe Root
                                </p>
                                <p className="clients__slider-slide-about">
                                    Cliente feliz
                                </p>
                                <ul className="clients__slider-slide-gallery">
                                    <li className="clients__slider-slide-item">
                                        <img src={ClientOne} alt="Client min" className="clients__slider-slide-item-img" />
                                    </li>
                                    <li className="clients__slider-slide-item">
                                        <img src={ClientTwo} alt="Client min" className="clients__slider-slide-item-img" />
                                    </li>
                                    <li className="clients__slider-slide-item">
                                        <img src={ClientThree} alt="Client min" className="clients__slider-slide-item-img" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Clients;