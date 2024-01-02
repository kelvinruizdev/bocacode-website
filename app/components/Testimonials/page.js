import Link from "next/link";
import React, { useState, useRef } from "react";
import TitleContainer from "../TitleContainer/page";
import Slider from "react-slick";
import data from '../../data/testimonials.json'
import TestimonialCard from "../TestimonialCard/page";
import '../../styles/testimonials.css'
import Icon from "../Icon/pages";
import Image from "next/image";
import '../../styles/testimonials.css'

const Testimonials = () => {

    var settings = {
        dots: false,
        infinite: false,
        arrows: false,
        className: "aa-card",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const sliderRef = useRef();
    return (

        <div className="bg-gray py-50">

            <div className="maxwidth-1366 m-auto">
                <h2>{data?.heading}</h2>

            </div>

            <Slider {...settings} ref={sliderRef}>
                
                        
                        <div className="testimonial-card block bg-white p-48">
                            <div className="row">
                                <Icon icon="star" />
                                <Icon icon="star" />
                                <Icon icon="star" />
                                <Icon icon="star" />
                                <Icon icon="star" />
                            </div>
                            <h3>{data?.title}</h3>
                            <div className="row">
                                <div >
                                    <Image
                                        src={data?.image_profile}
                                        width={64}
                                        height={64}
                                        className="rounded-total"
                                    />
                                </div>
                                <h4>{data?.name}</h4>
                            </div>
                        </div>
                        <div className="testimonial-card block bg-white p-48">
                            <div className="row">
                                <Icon icon="star" />
                                <Icon icon="star" />
                                <Icon icon="star" />
                                <Icon icon="star" />
                                <Icon icon="star" />
                            </div>
                            <h3>{data?.title}</h3>
                            <div className="row">
                                <div >
                                    <Image
                                        src={data?.image_profile}
                                        width={64}
                                        height={64}
                                        className="rounded-total"
                                    />
                                </div>
                                <h4>{data?.name}</h4>
                            </div>
                        </div>
                        <div className="testimonial-card block bg-white p-48">
                            <div className="row">
                                <Icon icon="star" />
                                <Icon icon="star" />
                                <Icon icon="star" />
                                <Icon icon="star" />
                                <Icon icon="star" />
                            </div>
                            <h3>{data?.title}</h3>
                            <div className="row">
                                <div >
                                    <Image
                                        src={data?.image_profile}
                                        width={64}
                                        height={64}
                                        className="rounded-total"
                                    />
                                </div>
                                <h4>{data?.name}</h4>
                            </div>
                        </div>
                        <div className="testimonial-card block bg-white p-48">
                            <div className="row">
                                <Icon icon="star" />
                                <Icon icon="star" />
                                <Icon icon="star" />
                                <Icon icon="star" />
                                <Icon icon="star" />
                            </div>
                            <h3>{data?.title}</h3>
                            <div className="row">
                                <div >
                                    <Image
                                        src={data?.image_profile}
                                        width={64}
                                        height={64}
                                        className="rounded-total"
                                    />
                                </div>
                                <h4>{data?.name}</h4>
                            </div>
                        </div>
                        
                    
            </Slider>

        </div>


    );
};

export default Testimonials;
