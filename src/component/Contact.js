import React from "react";
import "./contact.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import PlaceIcon from "@mui/icons-material/Place";

const Contact = () => {
    return (
        <div className="section13">
            <div className="dis-123">
                <div className="contact-banner-section">Contact</div>
                <div className="display-123">
                    <div className="email-1">
                        <div className="email1">
                            <EmailIcon className="icon" />
                        </div>{" "}
                        jobiskille@gmail.com
                    </div>

                    <div className="email-1">
                        <div className="email1">
                            <PhoneInTalkIcon className="icon" />
                        </div>{" "}
                        +917017990795
                    </div>

                    <div className="email-1">
                        <div className="email1">
                            <PlaceIcon className="icon" />
                        </div>{" "}
                        709 A-D National-Highway Delhi-NCR
                    </div>
                </div>
                <div className="contact">
                    <img className="image" src="./images/contact.png" alt="image" />
                </div>

            </div>
        </div>

    );
};

export default Contact;