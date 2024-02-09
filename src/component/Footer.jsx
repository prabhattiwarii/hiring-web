import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer">
        <div className="top-footer">
            <Link to="mailto:jobiskille@gmail.com" className="email">jobiskille@gmail.com</Link>
            <Link to="tel:7017990795" className="number">+917017990795</Link>
        </div>
        <div className="bottom-footer">
            <div className="left">
                <div className="name">About</div>
                <div className="para">We believe in people, and we know that they can create amazing, even seemingly impossible, things. People often amaze us with what we are capable of as humans. People push the boundaries to perform unimaginable things. And at codingjobs, our expertise is fueling this spark.</div>
            </div>
            <div className="center">
                <div className="name">Links</div>
                <div className='link-list'>
                    <Link to="/about" className='link'>About us</Link>
                    <Link to="/contact" className='link'>ContactUs</Link>
                    <Link to="/" className='link'>registration</Link>
                </div>
            </div>
            <div className='right'>
                <div className="name">Explore</div>
                <div className="link-list">
                    <Link className='link' to="/privacy"> Privacy&nbsp;policy</Link>
                </div>
            </div>
        </div>
        <div className="copyright">Copyright &copy; {new Date().getFullYear()} <a className='anchor' href="/" style={{fontWeight:600}}><span style={{color:"red"}}>&nbsp; Coding Jobs </span> <span style={{color:"skyblue"}}>Technologies &nbsp;</span></a> Pvt. Ltd. | All rights Reserved.</div>
    </div>
  )
}

export default Footer