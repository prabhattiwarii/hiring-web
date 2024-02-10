import React from "react";
import "./development.css";
import "./offer.css";
import { mobiledevlopmentIcon, webdesignIcon, webdevlopmentIcon } from "../helpers/Icon";
const Development = () => {
    const devlopmentData = [
        {id:1,icon:webdevlopmentIcon,title:"Website Development",text:"With us, get optimum solutions related to Web development services. Our experts provide genuine development packages with technical, design, and development support. We offer an environment where 24x7 support is given to the client for any kind of assistance."},
        {id:2,icon:mobiledevlopmentIcon,title:"MobileApp Development",text:"With us, get optimum solutions related to MobileApp development services. Our experts provide genuine development packages with technical, design, and development support. We offer an environment where 24x7 support is given to the client for any kind of assistance."},
        {id:3,icon:webdesignIcon,title:"Website Design",text:"With us, get optimum solutions related to Web Designing services. Our experts provide genuine development packages with technical, design, and development support. We offer an environment where 24x7 support is given to the client for any kind of assistance."}
    ]
    const serverData = [
        {id:1,industry:"Education and Human Resources"},
        {id:1,industry:"Real Estate and Property"},
        {id:1,industry:"Legal and Professional"},
        {id:1,industry:"E-commerce and Retail"},
        {id:1,industry:"Athletes and Artists"},
        {id:1,industry:"Software and Hi-Tech"},
        {id:1,industry:"Healthcare and Social Services"},
        {id:1,industry:"Restaurants and Venues"},
        {id:1,industry:"Corporate & Consulting"},
        {id:1,industry:"Automotive & Industrial"},
        {id:1,industry:"Information Technology"},
        {id:1,industry:"Start Ups"},
    ] 
    const techdata = [
        {image: "./images/salesforce.png",alt: "image",title: "Saleforce(SFCC,SFDC)",description: "includes all aspects of data planning, handling, analysis, documentation and storage."},
        {image: "./images/php.png",alt: "image1",title: "PHP",description: "is the process of using algorithms, methods and systems to extract knowledge and insights."},
        {image: "./images/nodejs.png",alt: "image1",title: "NODE",description: "Companies considering using these services should think about how these factors would affect their priority."},
        {image: "./images/react.png",alt: "image",title: "REACT",description: "Companies considering using these services should think about how these factors would affect their priorities."},
        {image: "./images/fluter.jpg",alt: "image",title: "FLUTTER",description: "Analyses qualitative and quantitative data to determine the most valuable opportunities to improve marketing."},
        {image: "./images/android-logo.png",alt: "image",title: "ANDROID",description: "The quality assurance process helps a business ensure its products meet the quality standards set by the company."},
        {image: "./images/download.jpg",alt: "image",title: "MULESOFT",description: "The quality assurance process helps a business ensure its products meet the quality standards set by the company."},
        {image: "./images/OIP.jpg",alt: "image",title: "LARAVEL",description: "C-J Technology aims to assist businesses in assembling a team of highly efficient and competent individuals."},
        {image: "./images/angular-mountain.png",alt: "image",title: "ANGULAR",description: "EARLY RESEARCH Making market research capabilities more valuable by gaining access to new and underutilized."},
        {image: "./images/opti.png",alt: "image",title: "DOT-NET",description: "C-J TECH is an India based website designing and development company. C-J TECH is an India based website designing."},
        {image: "./images/python.png",alt: "image",title: "PYTHON",description: "Responsive web design is a device-independent user interface design that aims to develop and deliver an optimized."},
        {image: "./images/java.jpg",alt: "image",title: "JAVA",description: "Your website is an online identity for your brand name.Your website is an online identity for your brand name website."},
        {image: "./images/web.png",alt: "image",title: "AJURE",description: "includes all aspects of data planning, handling, analysis, documentation and storage, and takes place."},
        {image: "./images/automation-testing.png",alt: "image",title: "TESTING",description: "includes all aspects of data planning, handling, analysis, documentation and storage, and takes place."},
        {image: "./images/graphic.png",alt: "image",title: "REACTNATIVE",description: "includes all aspects of data planning, handling, analysis, documentation and storage, and takes place."}
      ];
      
  return (
    <div className="development-section">
        <div className="imagination-section">
            <div className="imagination-banner-wrap">
                <div className="image"><img src="./images/01about.png"/></div>
            </div>
            <div className="content-wrap">
                <div className="heading">Imagination Becomes Reality With Us :-</div>
                <div className="imagination-content">
                    Coding-jobs Technology is a Mobile & Web application development company based
                    in India. We are committed to providing the best and quality based
                    solution. At Coding-jobs, you can meet with a group of skilled young
                    and enterprising professionals who have been part of the mobile
                    application, game development and web development since its
                    inception who are always very keen to help our clients. Our vision
                    and Values include delivering robust and quality services to our
                    clients to make them a step ahead in the world of digitization,
                    taking their business to next level.We provide flexible services in
                    the sphere of outsourcing. We can listen to and organize the
                    interaction model that fits your processes and company philosophy.
                    We aim to offer high quality, reliable and innovative IT services
                    that can change the way we do our day to day work, with a click of a
                    button!
            </div>
            </div>
        </div>
        <div className="web-success-section">
            <div className="heading">We Create <span>Yours Business</span> On Sucess</div>
            <div className="sub-heading">
                we're the cornerstone of the IT industry, offering a versatile array
                of Development,Trainings tailored to your needs.
            </div>
            <div className="btn-wrap">
                <button className="contact-btn" type="button" onClick={() => (window.location = "/contact")}>Contact Us</button>
                <button className="offer-btn" type="button" onClick={() => (window.location = "/offer")}>View All Services</button>
            </div>
        </div>
        <div className="about-content-wrap">
            <div className="heading">Maximize Your Business Via Innovative & Latest Technologies</div>
            <p>
                We handover the innovative and latest technologies that have the power
                to maximize your business. Our experts designed a proven digital
                marketing programs to drive maximum growth to your business. We proudly
                believe to provide the highest standards of feature-rich mobile/web
                solutions to empower our clients business. With years of experience &
                team of professionals successfully raise the technical excellence &
                highlight professionalism from us. Worked for beginners Entreprises and
                make them achieve their initial goals. We are generally known as the
                best digital marketing agency in the region who is handling oversea
                clients with our wide network in India. Our major area of expertise in
                web designing, web development, search engine marketing, online
                marketing, search engine optimization, content marketing, email
                marketing, Social media ads, social media optimization, and e-commerce
                solution.
            </p>
            <p>
                Our team of developers, designers, digital marketing experts,
                content writer all are known for delivering the best results. We
                collaborated with a certified team of professional best in their
                profession. In general, we worked and support various successful
                startups and large-scale enterprises by providing the best IT solutions.
                Our focus is to create and innovate new ideas and strategies for the
                success of our clients. As a result of high accuracy and transparency in
                the work, we able to make client achieve their desired goals. At Regius
                Technologies, you not only get the best IT Solutions but also received a
                culture where we maintain professionalism. Our smart working style let
                you know who we are! We present cost-effective IT Solutions in broad
                ways across the globe. We stand for our clients and to make them achieve
                the best results organically. In fact, it's important to know that
                businesses do not only need hard work for success. It needs smart work
                and support of smart people to take the business to the next level.
                Fortunately, we do both at a genuine cost.
            </p>

        </div>
        <div className="devlopment-wrap">
            {devlopmentData.map((item) => (
                <div className="dev-item" key={item.id}>
                    <div className="icon">{item.icon({width:80,height:80,fill:"cornflowerblue"})}</div>
                    <div className="title">{item.title}</div>
                    <div className="desc">{item.text}</div>
                </div>
            ))}
        </div>
        <div className="industry-serve-section">
            <div className="serve-heading">Industries We Serve</div>
            <div className="serve-desc">
                A development company for IT industries, crafting innovation through
                code and design, delivering solutions that redefine technological
                landscapes. Pioneering progress, they forge digital frontiers,
                sculpting tomorrow's tech today with expertise and vision.
            </div>
            <div className="industries-wrap">
                {serverData.map((industry) => (
                    <div className="industry" key={industry.id}>
                        <div className="title">{industry.industry}</div>
                    </div>
                ))}
            </div>
        </div>
        <div className="special-technologies">
            <div className="heading">Specialised In</div>
            <div className="sub-heading"> We Have Technologys</div>
            <div className="technologies-wrap">
                {techdata.map((tech,index) => (
                    <div className="technology" key={index}>
                        <div className="tech-img">
                            <img src={tech.image} alt="image" />
                        </div>
                        <div className="tech-info">
                            <div className="title">{tech.title}</div>
                            <div className="about">{tech.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Development;
