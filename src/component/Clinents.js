import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import "./Clints.css";
const SliderComponent = () => {
    const rating = [
        {id: 1,data: "C-J TECH is a cutting-edge IT company that stands at the forefront of technological innovation. Renowned for its expertise in developing robust software solutions & Reliable work with,  ",name: "Nini MIlan",post: "CEO",country: "(South-Africa)",companyname: "ZeniTechnology",},
        {id: 2,data: "C-J TECH consistently delivers top-notch products that cater to diverse industry needs. With a commitment to excellence, the company seamlessly blends creativity and best work towards ",name: "Mikil Kenli",post: "CEO",country: "(Australia)",companyname: "CalianTech",},
        {id: 3,data: "C-J TECH's dynamic team of professionals showcases a passion for staying ahead of the technological curve, ensuring clients benefit from the latest advancements in the fieldand work with,",name: "Sofia ",post: "CEO",country: "(USA)",companyname: "SmartTechnology",},
        {id: 4,data: "C-J TECH is Recognized for its reliability and customer-centric approach, C-J TECH continues to be a trusted partner for businesses seeking excellence in the digital landscape each work",name: "Gael Ludwing",post: "CEO",country: "(UK)",companyname: "Jerik-Solutions",},
    ];

    const clients = [
        { id: 10, img: "./images/ka.png", name: "" },
        { id: 11, img: "./images/dat.png", name: "" },
        { id: 12, img: "./images/eal.png", name: "" },
        { id: 13, img: "./images/hs.png", name: "" },
        { id: 14, img: "./images/q.png", name: "" },
        { id: 15, img: "./images/req.png", name: "" },
        { id: 16, img: "./images/we.png", name: "" },
        { id: 17, img: "./images/dia.png", name: "" },
        { id: 18, img: "./images/q.png", name: "" },
    ];

    const feedbackData = [
        {id:1,title:"HS Fashion",text:" We dealt with utter professionals and we are happy to receive the services on time with error free results during the tough times of COVID and we are continuing to enjoy the services related to IT and Customer services. Thank you C-J Technology."},
        {id:2,title:"Qaisra - A Fashion Fabric House",text:"We are immensely satisfied with services provided. you are the best in sourcing the best fit candidates required aklso thanks for closing all the requirements on time. Thank you Pooja."}
    ]
    const option = {
        type: "loop",
        autoplay: true,
        interval: 1500,
        pauseOnHover: true,
        arrows:false,
        pagination: true,
        perPage: 1,
        perMove: 1,
        gap: "30px",
        breakpoints: {
            599: { perPage: 2 },
            479: { perPage: 1 },
        },
    };

    const optionClient = {
        type: "loop",
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
        arrows: true,
        pagination: false,
        perPage: 6,
        perMove: 1,
        breakpoints: {
            1400: {perPage: 5},
            1099: {perPage: 4},
            767: {perPage: 3},
            599: {perPage: 2},
            479: {perPage: 1}
        }
    };


    return (
        <div className="testimonial-wrap">
            <div className="testimonial-client">
                <div className="testimonial-left">
                    <div className="heading">Testmonials</div>
                    <div className="testimonial-subtitle">
                        Here it is straight form our <span>amzing clients</span> to see what they say about the value and services we offer them.
                    </div>
                    <div className="testimonial-arrows">
                        <span className="arrow-one">&rarr;</span>
                        <span className="arrow-two">&larr;</span>
                    </div>
                </div>
                <div className="testimonial-right">
                    <Splide options={option} className="splide">
                        {rating.map((rating) => (
                            <SplideSlide key={rating.id}>
                                <div className="testimonial-review-wrapper">
                                    <div className="review-data">{rating.data}</div>
                                    <div className="review-data-wrap">
                                        <div className="name">{rating.name}</div>
                                        <div className="post">{rating.post}</div>
                                        <div className="address">{rating.companyname} <span>{rating.country}</span></div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
            <div className="world">World Wide Clint & Work</div>
            <div className="business-lifecycle">
                <div className="lifecycle-heading">BUSINESS LIFECYCLE</div>
                <div className="process-items">
                    <div className="process-item">
                        <span className="process-number">1</span>
                        <h6 className="process-title">(Define your goals)</h6>
                    </div>
                    <div className="process-item">
                        <span className="process-number">2</span>
                        <h6 className="process-title">(Plan and map your process)</h6>
                    </div>
                    <div className="process-item">
                        <span className="process-number">3</span>
                        <h6 className="process-title">(Set actions)</h6>
                    </div>
                    <div className="process-item">
                        <span className="process-number">4</span>
                        <h6 className="process-title">(Test the process)</h6>
                    </div>
                    <div className="process-item">
                        <span className="process-number">5</span>
                        <h6 className="process-title">(Implement the process)</h6>
                    </div>
                    <div className="process-item">
                        <span className="process-number">6</span>
                        <h6 className="process-title">(Monitor the results)</h6>
                    </div>
                </div>
            </div>
            <div className="client-feedback">
                {feedbackData.map((feedback)=> (
                    <div key={feedback.id} className="feedback-item">
                        <h1 className="feedback-title">{feedback.title}</h1>
                        <div className="feedback-text">{feedback.text}</div>
                    </div>
                ))}
            </div>

            <div className="client">Our Clients</div>
            <div className="client-slider">
                <Splide options={optionClient}>
                    {clients.map((client) => (
                        <SplideSlide key={client.id}>
                            <div className="client-item">
                                <img className="client-img" src={client.img} alt="Client logo" />
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
};

export default SliderComponent;
