import React from "react";
import "./about.css";
const About = () => {
    return (
        <div className="about-wrap">
            <div className="intro-wrap">
                <div className="banner-wrap">
                    <div className="img-wrap">
                        <img className="about-image" src="./images/about.jpeg" alt="About Us"/>
                    </div>
                </div>
                <div className="intro-text">
                    <h2 className="heading">Welcome to Coding-Jobs Consulting</h2>
                    <p className="about-text">We are a professional business consulting firm based in N-H 709A-D, Titawi, Delhi-NCR, Uttar Pradesh. Specializing in IT and Management Consulting services.</p>
                    <p className="sub-heading">Our focus lies in:</p>
                    <ul className="service-list">
                        <li className="list">Management Consulting</li>
                        <li className="list">Process Improvement</li>
                        <li className="list">Project Management</li>
                        <li className="list">Implementation Support</li>
                    </ul>
                    <p className="success-text">We’ve successfully served various segments with our strategic planning, quality, and expertise.</p>
                </div>
            </div>
            <div className="activities-section">
                <div className="business-activities">
                    <h2 className="heading">Business Consulting Activities</h2>
                    <ul className="activity-list">
                        <li className="list">Create in-depth reports and presentations on your business’s processes.</li>
                        <li className="list">Provide forecasts and expectations.</li>
                        <li className="list">Suggest solutions to business problems.</li>
                        <li className="list">Host workshops and staff presentations within your company.</li>
                        <li className="list">Study new and potential trends within an industry.</li>
                        <li className="list">Discover new opportunities and markets for your businesses to expand in.</li>
                        <li className="list">Find new financial avenues to keep your company solvent.</li>
                    </ul>
                </div>
                <div className="banner-wrap">
                    <div className="img-wrap"><img className="business-image" src="./images/business.png" alt="Business"></img></div>
                </div>
            </div>
            <div className="team-section">
                <h2 className="heading">Our Team</h2>
                <div className="team-info">
                    <p className="team-text">The founders of Coding-Jobs possess a unique combination of creativity, innovation, and leadership skills. They actively contribute to the company's reputation by seeking clients, vetting consultants, and developing partnership opportunities.</p>
                    <p className="team-text">Since its establishment in 2020, Coding-Jobs has experienced substantial growth. Our current team comprises exceptional individuals with expertise in business analysis, project management, recruitments, quality, training, and more. They hold extensive certifications and qualifications, setting us apart from the competition.</p>
                </div>
            </div>
        </div>
    )
}

export default About