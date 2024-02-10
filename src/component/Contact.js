import React from "react";
import "./contact.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import PlaceIcon from "@mui/icons-material/Place";

const Contact = () => {
    return (
        <div className="contact-us-wrap">
            <div className="heading">Contact us</div>
            <div className="contact-details-wrap">
                <a className="contact-link email-wrap" href="mailto:jobiskille@gmail.com">
                    <div className="icon"><EmailIcon /></div>
                    jobiskille@gmail.com
                </a>
                <a className="contact-link phone-wrap" href="tel:+917017990795">
                    <div className="icon"><PhoneInTalkIcon /></div>
                    +917017990795
                </a>
                <a className="contact-link address-wrap" href="https://maps.google.com/?q=709%20A-D%20National-Highway%20Delhi-NCR" target="_blank">
                    <div className="icon"><PlaceIcon /></div>
                    709 A-D National-Highway Delhi-NCR
                </a>
            </div>
            <div className="right-wrap">
                <div className="contact-banner">
                    <img className="image" src="./images/contact.png" alt="image" />
                </div>
            </div>
        </div>
    );
};

export default Contact;