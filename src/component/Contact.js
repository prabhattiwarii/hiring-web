import React, { useState } from "react";
import "./contact.css";
import {focusOnFeild,hasValidationError,validationError} from '../helpers/frontend';
import {mapIcon,emailIcon,phoneIcon} from "../helpers/Icon";
import axios from "axios";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [form, setForm] = useState({ first_name: "", last_name: "", email: "", phone: "", message: "",interest:""});
    const toastOptions = {position:"bottom-center",autoClose:3000,hideProgressBar:true,closeOnClick:false,pauseOnHover:false,}
    const [error, setError] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    
    const handleKeyPress =(e) =>{
        if (e.key && e.key.length === 1 && !/\d/.test(e.key)) {
            e.preventDefault();
        }
    }

    const validate = () => {
        const newError = {};
        let positionFocus = "";
        const emailRe = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
        const phoneRE = /^(?![0-4])[0-9]{10}$/;
        const urlRE = /^(https?:\/\/)?(?!w\.com)([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
        if(!form.first_name || !form.first_name.trim()){
            newError["first_name"] = "Required";
            positionFocus = positionFocus || "first_name";
        }else if(form.first_name.length > 50){
            newError["first_name"] = "Maximum 50 characters allowed";
            positionFocus = positionFocus || "first_name";
        }
        if(!form.last_name || !form.last_name.trim()){
            newError["last_name"] = "Required";
            positionFocus = positionFocus || "last_name";
        }else if(form.last_name.length > 50){
            newError["last_name"] = "Maximum 50 characters allowed";
            positionFocus = positionFocus || "last_name";
        }
        if(!form.email || !form.email.trim()){
            newError["email"] = "Required";
            positionFocus = positionFocus || "email";
        }else if(!emailRe.test(form.email)){
            newError["email"] = "Invalid Email";
            positionFocus = positionFocus || "email";
        }
        if (!form.phone || !form.phone.trim()) {
            newError["phone"] = "Required";
            positionFocus = positionFocus || "phone";
        } else if (!phoneRE.test(form.phone)) {
            newError["phone"] = "Please enter a valid 10-digit phone number";
            positionFocus = positionFocus || "phone";
        }
        if (form.website && !urlRE.test(form.website)) {
            newError["website"] = "Please enter a valid website URL.";
            positionFocus = positionFocus || "website";
        }

        if (!form.interest || !form.interest.trim()) {
            newError["interest"] = "Required";
            positionFocus = positionFocus || "interest";
        }

        if(!form.message || !form.message.trim()){
            newError["message"] = "Required";
            positionFocus = positionFocus || "message";
        }else if(form.message.length > 500){
            newError["message"] = "Maximum 500 characters allowed";
            positionFocus = positionFocus || "message";
        }

        setError(newError);
        if(positionFocus){
            focusOnFeild(positionFocus);
            return false;
        }
        return true;
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const {data} = await axios.post("http://localhost:3004/contact",form)
                if(data){
                    toast.success("submit succesfully",toastOptions)
                    setForm({first_name: "",last_name: "", email: "", phone: "", message: "",website:"",interest:""});
                }else{
                    toast.error("error",toastOptions);
                }
            } catch (error) {
                console.log(error);
                toast.error('An error occurred during form submission.',toastOptions);
            }
        }
    }
    return (
        <>
            <div className="contact-wrap">
                <div className="contact-info">
                    <div className="contact-heading">Contact Info</div>
                    <p className="contact-text">Always Excited to Discuss Unique Solution For Business</p>
                    <div className="contact-call">
                        <a href="tel:7017990795" className="contact-wrap">
                            <span>{phoneIcon({width:18,height:18,fill:"skyblue"})}</span>
                            <div className="heading"><div className="heading-detail">Phone</div>+917017990795</div>
                        </a>
                        <a href="mailto:jobiskille@gmail.com" className="contact-wrap">
                            <span>{emailIcon({width:18,height:18,fill:"skyblue"})}</span>
                            <div className="heading"><div className="heading-detail">Email</div>jobiskille@gmail.com</div>
                        </a>
                        <a href="https://maps.google.com/?q=709%20A-D%20National-Highway%20Delhi-NCR" target="_blank" rel="noopener noreferrer" className="contact-wrap">
                            <span>{mapIcon({width:18,height:18,fill:"skyblue"})}</span>
                            <div className="heading"><div className="heading-detail">Address</div>709 A-D National-Highway Delhi-NCR</div>
                        </a>
                    </div>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109778.02692604!2d76.70652620645801!3d30.70255967075429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f936ed6a2b757%3A0x898668d7061b40f0!2sPanchkula%2C%20Haryana!5e0!3m2!1sen!2sin!4v1696438764296!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" frameBorder = "0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="unique"></iframe>
                    </div>
                </div>
                <div className="contact-info">
                    <div className="contact-heading">Let’s get Started!</div>
                    <p className="contact-text">Request your FREE Consultation.</p>
                    <form action="" className="form" onSubmit={handleSubmit} autoComplete="off">
                        <div className="form-group">
                            <div className="input-form">
                                <label htmlFor="firstName">First Name</label>
                                <input className={hasValidationError(error, "first_name") ? "has-input-error" : ""} type="text" placeholder="First Name" name="first_name" value={form.first_name} onChange={handleChange} />
                                {hasValidationError(error, "first_name") ? (<div className="error">{validationError(error, "first_name")}</div>) : null}
                            </div>
                            <div className="input-form">
                                <label htmlFor="lastName">Last Name</label>
                                <input className={hasValidationError(error, "last_name") ? "has-input-error" : ""} type="text" placeholder="Last Name" name="last_name" value={form.last_name} onChange={handleChange} />
                                {hasValidationError(error, "last_name") ? (<div className="error">{validationError(error, "last_name")}</div>) : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-form">
                                <label htmlFor="email">Email</label>
                                <input className={hasValidationError(error, "email") ? "has-input-error" : ""} type="text" placeholder="Email" name="email" value={form.email} onChange={handleChange} />
                                {hasValidationError(error, "email") ? (<div className="error">{validationError(error, "email")}</div>) : null}
                            </div>
                            <div className="input-form">
                                <label htmlFor="phone">Phone Number</label>
                                <input className={hasValidationError(error, "phone") ? "has-input-error" : ""} type="text" maxLength={10} placeholder="Phone Number" name="phone" value={form.phone} onChange={handleChange}  onKeyPress={handleKeyPress}/>
                                {hasValidationError(error, "phone") ? (<div className="error">{validationError(error, "phone")}</div>) : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-form">
                                <label htmlFor="website" className={`input ${hasValidationError(error, "website") ? "has-input-error" : ""}`}>Website</label>
                                <input name="website" type="text" placeholder="www.example.com" value={form.website} onChange={handleChange}/>
                                {hasValidationError(error, "website") && <span className="error">{validationError(error, "website")}</span>}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-form">
                            <label htmlFor="interest">Interest</label>
                                <select onChange={handleChange} value={form.interest} name="interest" className={hasValidationError(error, "interest") ? "has-input-error" : ""}>
                                    <option value="">Select</option>
                                    <option value="website-design">Website Design</option>
                                    <option value="website-development">Website Development</option>
                                    <option value="online-marketing">Online Marketing (Adwords/Remarketing)</option>
                                </select>
                                {hasValidationError(error, "interest") ? (<div className="error">{validationError(error, "interest")}</div>) : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-form">
                                <label htmlFor="description">Description</label>
                                <textarea className={hasValidationError(error, "message") ? "has-input-error" : ""} placeholder="Type your message..." name="message" value={form.message} onChange={handleChange} />
                                {hasValidationError(error, "message") ? (<div className="error">{validationError(error, "message")}</div>) : null}
                            </div>
                        </div>
                        <div className='form-btn'>
                            <button className='apply-btn' type='submit'>SUBMIT NOW</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Contact;