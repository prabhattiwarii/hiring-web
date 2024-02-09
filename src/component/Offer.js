import React from 'react';
import './offer.css';

const Offer = () => {
    const services = [
        {id: 1,photo: "./images/web.png",title: "Data Management",description: "Data management includes all aspects of data planning, handling, analysis, documentation and storage."},
        {id: 2,photo: "./images/data1.png",title: "Data Science",description: "Data science is the process of using algorithms, methods and systems to extract knowledge and insights."},
        {id: 3,photo: "./images/mobile.png",title: "Cloud Service",description: "Companies considering using these services should think about how these factors would affect their priority."},
        {id: 4,photo: "./images/datamange.png",title: "DATA Analysis",description: "Companies considering using these services should think about how these factors would affect their priorities."},
        {id: 5,photo: "./images/opti.png",title: "Optimization",description: "Analyses qualitative and quantitative data to determine the most valuable opportunities to improve marketing."},
        {id: 6,photo: "./images/market.png",title: "Customer Experience",description: "The quality assurance process helps a business ensure its products meet the quality standards set by the company."},
        {id: 7,photo: "./images/nps.png",title: "Requirments",description: "C-J Technology aims to assist businesses in assembling a team of highly efficient and competent individuals."},
        {id: 8,photo: "./images/opti.png",title: "Market Research CS Benchmarking",description: "EARLY RESEARCH Making market research capabilities more valuable by gaining access to new and underutilized."},
        {id: 9,photo: "./images/web.png",title: "Website Design",description: "C-J TECH is an India based website designing and development company. C-J TECH is an India based website designing."},
        {id: 10,photo: "./images/quality.png",title: "Responsive Web Design",description: "Responsive web design is a device-independent user interface design that aims to develop and deliver an optimized."},
        {id: 11,photo: "./images/req.png",title: "Custom Website Design",description: "Your website is an online identity for your brand name.Your website is an online identity for your brand name website."},
        {id: 12,photo: "./images/web.png",title: "Remotley",description: "Data management includes all aspects of data planning, handling, analysis, documentation and storage, and takes place."},
        {id: 13,photo: "./images/cloud.png",title: "Freelance Support",description: "Data management includes all aspects of data planning, handling, analysis, documentation and storage, and takes place."},
        {id: 14,photo: "./images/custom.png",title: "C2C Resourses",description: "Data management includes all aspects of data planning, handling, analysis, documentation and storage, and takes place."}
    ];

    return (
        <div className='service-wrap-section'>
            <div className='heading'>SPECIALISED IN</div>
            <div className='sub-heading'>What We Offer</div>
            <div className='services-wrap'>
                {services.map((service) => (
                    <div className='services' key={service.id}>
                        <div className="img-wrap"><img src={service.photo} alt="image" /></div>
                        <div className='bottom-info'>
                            <div className='title'>{service.title}</div>
                            <div className='review'>{service.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Offer;
