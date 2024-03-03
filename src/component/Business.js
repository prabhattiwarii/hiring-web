import React from "react";
import "./business.css";
import { businessIcon, educationIcon, entertainmentIcon, financeIcon, fooddrinkIcon, galaryIcon, healthfitnessIcon, lifestyleIcon, shoppingIcon, socialmarketingIcon, sportIcon, travelIcon } from "../helpers/Icon";

const Business = () => {
	const data = [
		{ id:1, title:"Busniess", icon:businessIcon },
		{ id:2, title:"Education", icon:educationIcon },
		{ id:3, title:"Entertainment & Music", icon:entertainmentIcon },
		{ id:4, title:"Finance", icon:financeIcon },
		{ id:5, title:"Food & Drink", icon:fooddrinkIcon },
		{ id:6, title:"Health & Fitness", icon:healthfitnessIcon },
		{ id:7, title:"Photo & Video", icon:galaryIcon },
		{ id:8, title:"Shopping", icon:shoppingIcon },
		{ id:9, title:"Sports", icon:sportIcon },
		{ id:10, title:"Social Networking", icon:socialmarketingIcon },
		{ id:11, title:"Travel", icon:travelIcon },
		{ id:12, title:"Lifestyle", icon:lifestyleIcon },
	];
	const clientData  = [
		{id:1, text:"Highly skilled Developers", image:"./images/homeimg_1.png" },
		{id:2, text:"On Time Delivery", image:"./images/homeimg_2.png" },
		{id:3, text:"Quick Response", image:"./images/homeimg_3.png" },
		{id:4, text:"Diverse Expertise", image:"./images/homeimg_4.png" },
		{id:5, text:"Committed to Quality", image:"./images/homeimg_5.png" },
		{id:6, text:"Responsive to your need", image:"./images/homeimg_6.png" },
		{id:7, text:"Follows Industry Trends", image:"./images/homeimg_7.png" },
		{id:8, text:"Guaranteed ROI", image:"./images/homeimg_8.png" }
	];
	const achivementData = [
		{id:1,title:"Satisfied Clients",number:"+200",image:"./images/smile.png",bg:"#029e76",shadow:"0 2px 15px rgb(2 158 118 / 50%)"},
		{id:2,title:"Projects Completed",number:"+500",image:"./images/settings.png",bg:"#ffa808",shadow:"0 2px 15px rgb(255 168 8 / 50%)"},
		{id:3,title:"Client Retention",number:"96%",image:"./images/startup.png",bg:"#5543d1",shadow:"0 2px 15px rgb(85 67 209 / 50%);"},
		{id:4,title:"Years Completed",number:"13+",image:"./images/confetti.png",bg:"#ff586e",shadow:"0 2px 15px rgb(255 88 110 / 50%)"},
	]
	
	return (
		<div className="business-section-wrap">
			<div className="conversion-section">
				<div className="inner">
					<div className="conversion-main">We Convert your Idea <br /> into <span> Reality </span></div>
					<div className="conversion-description">Do you have any idea? Want to digitize Your business?</div>
					<div className="conversion-inquire" onClick={() => window.location="/contact"}><span>&gt;</span>Inquire Now</div>
				</div>
			</div>
			<div className="industry-solutions-section">
				<div className="solutions-main">
					<div className="main-heading">Our Industry-specific IT Solutions!</div>
					<div className="sub-main-heading">
						Helping <span>Businesses</span> in All Domains
					</div>
					<p className="main-details">
						Coding-Jobs Technology never shies away from a new challenge, new
						technologies, and new markets. This flexibility and versatility have
						allowed us to utilize our expertise across a growing range of
						industries
					</p>
				</div>
				<div className="solutions-items">
					{data.map((item) => (
						<div className="solution-item" key={item.id}>
							<div className="inner">
								<div className="item-icon"> {item.icon({ width:50, height:50})}</div>
								<div className="item-title"> {item.title}</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="workflow-section">
				<div className="workflow-header">Our Work Flow</div>
				<div className="workflow-description">Here are the steps &nbsp;<span>we follow</span></div>
				<div className="workflow-steps">
					<div className="step-1"></div>
					<div className="step-2"></div>
					<div className="step-3"></div>
					<div className="step-4"></div>
					<div className="step-5"></div>
					<div className="step-6"></div>
					<div className="step-7"></div>
				</div>
				<div className="workflow-details">
					<div className="workflow-item">
						<div className="icon">01</div>
						<div className="title">Support & Maintenance</div>
					</div>
					<div className="workflow-item">
						<div className="icon">02</div>
						<div className="title">Requirement Gathering</div>
					</div>
					<div className="workflow-item">
						<div className="icon">03</div>
						<div className="title">UI/UXDesign</div>
					</div>
					<div className="workflow-item">
						<div className="icon">04</div>
						<div className="title">Prototype-</div>
					</div>
					<div className="workflow-item">
						<div className="icon">05</div>
						<div className="title">Development</div>
					</div>
					<div className="workflow-item">
						<div className="icon">06</div>
						<div className="title">Quality Assurance</div>
					</div>
					<div className="workflow-item">
						<div className="icon">07</div>
						<div className="title">Deployment</div>
					</div>
				</div>
			</div>
			<div className="expertise-section">
				<div className="expertise-title">Our Expertise</div>
				<div className="expertise-description">
					Amazing Services to Build <span>Busines Growth</span>
				</div>
				<div className="expertise-details">
					<div className="expertise-category-1">
						<div className="category-item">
							<div className="item-name">iOS Development</div>
							<div className="item-skills">Objective-C, Swift, Xcode</div>
						</div>
						<div className="category-item">
							<div className="item-name">Android Development</div>
							<div className="item-skills">Java, XML, Android Studio, Firebase</div>
						</div>
						<div className="category-item">
							<div className="item-name">Web Development</div>
							<div className="item-skills">Core PHP, Codeigniter, Laravel, Wordpress HTML, CSS, JavaScript, MySql</div>
						</div>
					</div>
					<div className="expertise-image">
						<img className="image" src="./images/converted.png"></img>
					</div>
					<div className="expertise-category-2">
						<div className="category-item">
							<div className="item-name">React-Native Development</div>
							<div className="item-skills">React, JavaScript, Redux</div>
						</div>
						<div className="category-item">
							<div className="item-name">UI/UX Design</div>
							<div className="item-skills">Mobile App, Website, Logo, Brochure, Flyer, Visiting Cards, Photoshop, Illustrator</div>
						</div>
						<div className="category-item">
							<div className="item-name">Flutter Development</div>
							<div className="item-skills">Flutter SDK, Dart</div>
						</div>
					</div>
				</div>
			</div>
			<div className="statistics-container">
				<div className="box-wrap">
					{achivementData.map((item) => (
						<div className="box" key={item.id}>
							<div className="icon-wrap" style={{ background: item.bg, boxShadow: item.shadow }}>
								<img src={item.image} alt="img"/>
							</div>
							<div className="box-a">{item.title}</div>
							<span>{item.number}</span>
						</div>
					))}
				</div>
			</div>
			<div className="about-weaplines-section">
				<div className="weapline-why">Why Choose Coding-Job Technology</div>
				<div className="weapline-subdetails">
					We Create Amazing And Remarkable <span>Experience For Our Clients</span>
				</div>
				<div className="main-section">
					{clientData.map((data) => (
					<div className="sec-3" key={data.id}>
						<div className="main-1">
							<img src={data.image}></img>
						</div>
						<div className="text">{data.text}</div>
					</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Business;
