import React from 'react';
import Reveal from "react-awesome-reveal";

import ALink from "~/components/features/alink";
import OwlCarousel from '~/components/features/owl-carousel';

import { fadeInUpShorter, introSlider } from "~/utils/data";

function IntroSlider () {
    return (
        <div className="intro-slider-container mb-2 mb-lg-4">
            <OwlCarousel adClass="intro-slider owl-nav-inside owl-simple" isTheme={ false } options={ introSlider }>
                <div className="intro-slide" style={ { backgroundImage: 'url(images/home/sliders/slide-1.jpg)' } }>
                    <div className="container intro-content">
                        <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 500 }>
                            <>
                                <h3 className="intro-subtitle text-primary">SEASONAL PICKS</h3>
                                <h1 className="intro-title">Get All <br />The Good Stuff</h1>

                                <ALink href="/shop/sidebar/list" className="btn btn-outline-primary-2">
                                    <span>DISCOVER MORE</span>
                                    <i className="icon-long-arrow-right"></i>
                                </ALink>
                            </>
                        </Reveal>
                    </div>
                </div>

                <div className="intro-slide" style={ { backgroundImage: 'url(images/home/sliders/slide-2.jpg)' } }>
                    <div className="container intro-content">
                        <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 500 }>
                            <>
                                <h3 className="intro-subtitle text-primary">all at 50% off</h3>
                                <h1 className="intro-title text-white">The Most Beautiful <br />Novelties In Our Shop</h1>

                                <ALink href="/shop/sidebar/list" className="btn btn-outline-primary-2 min-width-sm">
                                    <span>SHOP NOW</span>
                                    <i className="icon-long-arrow-right"></i>
                                </ALink>
                            </>
                        </Reveal>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
}

export default React.memo( IntroSlider );