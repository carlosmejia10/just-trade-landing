import React from "react";
import './blog.scss';
import BlogOne from '../../images/blogOne.png'
import BlogTwo from '../../images/blogTwo.png'
import BlogThree from '../../images/blogThree.png'

const Blog = () => {
    return (
        <div className="blog">
            <div className="blog__container">
                <div className="blog__textcont">
                    <p className="clients__subtitle">
                        Nuestro blog
                    </p>
                    <h2 className="blog__title">
                        Ultimas noticias
                    </h2>
                </div>
                <div className="blog__content">
                    <ul className="blog__list">
                        <li className="blog__item">
                            <img src={BlogOne} alt="blog" className="blog__item-img" />
                            <h3 className="blog__item-title">
                                Descubre el mundo de inversiones a startups!
                            </h3>
                            <p className="blog__item-details">
                                Por <span className="blog__item-details-focus">Admin</span> - Enero 25, 2021
                            </p>
                            <p className="blog__item-content">
                                JustTrade es una compañía que se enfoca en ayudar a...
                            </p>
                        </li>
                        <li className="blog__item">
                            <img src={BlogTwo} alt="blog" className="blog__item-img" />
                            <h3 className="blog__item-title">
                                Invierte desde cualquier lugar del mundo con solo 2 clicks
                            </h3>
                            <p className="blog__item-details">
                                Por <span className="blog__item-details-focus">Admin</span> - Enero 25, 2021
                            </p>
                            <p className="blog__item-content">
                                Que es lo mas valorado del mundo? Dinero? Es el tiempo que...
                            </p>
                        </li>
                        <li className="blog__item">
                            <img src={BlogThree} alt="blog" className="blog__item-img" />
                            <h3 className="blog__item-title">
                                Mejores startups para invertir en el momento
                            </h3>
                            <p className="blog__item-details">
                                Por <span className="blog__item-details-focus">Admin</span> - Enero 25, 2021
                            </p>
                            <p className="blog__item-content">
                                En este posteo vamos a analizar cuales son las mejores oportunidades...
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Blog;