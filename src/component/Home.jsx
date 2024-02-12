import React from 'react'
import './home.css';

const Home = () => {

    const cardData = [
        {id:1,title:"Access to the Best Candidates",desc:"Finding the best candidates can be a challenging task, We have access to a pool of talented candidates for your business, with our effective recruitment strategies."},
        {id:1,title:"Enable Business Growth",desc:"Allow your business to reach new heights with our effective recruitment and retention tactics, as well as personnel development and training for your employees."},
        {id:1,title:"Save time & money",desc:"We can help your company to save time and money to by providing expert HR solutions in key areas, allowing you to focus on other aspects of the business."},
    ]
    const requirementData = [
        {id:1,img:"./images/coaching-1.jpg",title:"Understanding",text:"We understand your business and the specific requirements for candidates business is looking to fill."},
        {id:2,img:"./images/coaching-3.jpg",title:"Sourcing",text:"Our team provides excellent resources that help propel your business forward."},
        {id:3,img:"./images/coaching-2.jpg",title:"Assisting",text:"Our team will assist you until the final selection of your candidate, and we'll continue to provide you with candidates."},
        {id:4,img:"./images/coaching-4.jpg",title:"Selection",text:"Regardless of the selection process, our team is with you to provide a better candidate."},
    ]
    const offerData = [
        {id:1,img:"./images/service-1.jpg",title:"Freelancing Candidate",desc:"We offer top-tier freelancing candidates equipped with diverse skills and expertise, ensuring a perfect fit for your project needs."},
        {id:2,img:"./images/service-2.jpg",title:"Onsite-Candidate",desc:"Our remote candidates offer exceptional skills and dedication, seamlessly integrating into your team from anywhere in the world."},
        {id:3,img:"./images/service-3.jpg",title:"JOB OPPURTUNITIES",desc:"We are offering wide range of job oppurtunities"},
    ]
 
    return (
        <div className='home-wrap'>
            <div className="banner-section">
                <div className="content">
                    <div className="about">About Us</div>
                    <div className="heading">The Best IT solution with 13 years of Experience </div>
                    <div className="c-jtech">C-J Technologies is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.</div>
                    <div className="but">
                        <div className="call">Call to ask any question</div>
                        <div className="num">+91-7017990795</div>
                    </div>
                    <div className="btn-wrap">
                        <button type='button' onClick={() => window.location = "/contact"} className="req-btn">Request A Quote</button>
                    </div>
                </div>
                <div className="photo">
                    <img src="./images/about-2.jpg" alt="" />
                </div>
            </div>
            <div className="business-detail-section">
                <div className="business-heading">"B2B" and "B2C" are abbreviations commonly used in business to describe different types of transactions and relationships. Here's what they stand for:</div>
                <ul className='lists'>
                    <li className='list'><span> **B2B (Business-to-Business):**</span>
                        -  B2B refers to business transactions and interactions between two or more businesses.
                        - **Example:** A manufacturing company purchasing raw materials from another company, or a software company providing services to another business.</li>
                    <li className='list'><span>**B2C (Business-to-Consumer):**</span>
                        -  B2C refers to business transactions and interactions between a business and individual consumers.
                        - **Example:** An online retailer selling products directly to individual customers, or a local bakery serving customers in the community.</li>
                    <li className='list'> <span>**B2G (Business-to-Government):**</span>
                        -  B2G involves businesses providing goods or services to government entities.
                        - **Example:** A company bidding for a government contract to provide IT services or construction projects.
                    </li>
                    <li className='list'> <span>**C2C (Consumer-to-Consumer):**</span>
                        -  C2C involves transactions between individual consumers.
                        - **Example:** Online marketplaces or auction platforms where individuals sell products or services directly to other individuals.</li>
                    <li className='list'><span>**B2B2C (Business-to-Business-to-Consumer):**</span>
                        -  B2B2C involves a business selling products or services to other businesses, which then sell to individual consumers.
                        - **Example:** A manufacturer selling products to a retailer, which then sells those products to end consumers.</li>
                    <li className='list'><span> **B2E (Business-to-Employee):**</span>
                        -  B2E involves businesses providing products or services to their employees.
                        - **Example:** Companies offering employee discounts on their products or services.
                    </li>
                    <li className='list'> <span>**C2B (Consumer-to-Business):**</span>
                        -  C2B involves consumers providing products or services to businesses.
                        - **Example:** Freelancers offering their services to companies through platforms or individual customers providing reviews and feedback to businesses
                    </li>
                </ul>
            </div>
            <div className='business-card'>
                <div className="card-wrap">
                    {cardData.map((card) => (
                        <div className="card" key={card.id}>
                            <div className="title">{card.title}</div>
                            <div className="desc">{card.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='recruitment-section'>
                <div className="heading">
                    <div className="head1">HOW WE CAN HELP</div>
                    <div className="head2"> Our Recruitment Process</div>
                </div>
                <div className='box-wrap'>
                    {requirementData.map((item) => (
                        <div className='box-item' key={item.id}>
                            <div className="layout"></div>
                            <div className="im">
                                <img src={item.img} alt="Logo" />
                            </div>
                            <div className="info">
                                <div className='text'>{item.text}</div>
                                <div className='title'>{item.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='expert-section'>
                <div className='left'>
                    <div className='title'>GET TO KNOW US</div>
                    <div className='heading'>Recruitment Services From Experts</div>
                    <div className='sub-heading'>Working with us can help your business streamline the recruitment process and find top talent more efficiently.</div>
                    <div className='desc'>We provide valuable insights and guidance throughout the recruitment process. We can help businesses understand current market trends and identify the most effective recruitment strategies for your company.</div>
                </div>
                <div className='right'>
                    <div className="right-banner">
                        <div className="im">
                            <img className='img-1' src='./images/about-1.jpg' alt="Logo" />
                        </div>
                        <div className="im1">
                            <img className='img-2' src='./images/about-2.jpg' alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='services-offer-section'>
                <div className='servivces-heading'>
                    <div className='heading'>What we offering</div>
                    <div className='sub-heading'>Value Added Services</div>
                </div>
                <div className='services-wrap'>
                    {offerData.map((servics) => (
                        <div className='services-item' key={servics.id}>
                            <div className="service-img"><img src={servics.img} alt='' /></div>
                            <div className="info">
                                <div className="head">{servics.title}</div>
                                <div className="head-1">{servics.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="opportunity-section">
                <div className="left">
                    <div className="small">JOB OPPURTUNITIES</div>
                    <div className="big">We are offering wide range of job oppurtunities</div>
                </div>
                <div className="right">
                    <img src="./images/place-3.jpg" alt="images" />
                </div>
            </div>
            <div className="contact-us-section">
                <div className="left">
                    <div className="heading">Are you Looking for Recruitment Services?</div>
                    <div className='btn-wrap'>
                        <div type='button' onClick={() => window.location = "/contact"} className="req-btn">ContactUs</div>
                    </div>
                </div>
                <div className="right">
                    <img src="./images/cta.png" alt="phon" />
                </div>
            </div>
        </div>

    )
}

export default Home;
