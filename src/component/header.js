import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { barIcon, crosIcon } from "../helpers/Icon";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navData = [
        { id: 1, title: "Business", link: "/business", active: "business" },
        { id: 2, title: "Development", link: "/development", active: "development" },
        { id: 3, title: "Services", link: "/offer", active: "offer" },
        { id: 4, title: "Clients", link: "/clients", active: "clients" },
        { id: 5, title: "About", link: "/about", active: "about" },
        { id: 6, title: "ContactUs", link: "/contact", active: "contact" }
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 767) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="header-wrap">
            <div className="logo-wrap">
                <h1><Link className="heading" to="/"> Coding Jobs </Link></h1>
                <div className="text">Technologies</div>
            </div>
            <div className={`nav-items ${isMobileMenuOpen ? "open" : "close"}`}>
                {navData.map(item => (
                    <div key={item.id} className={`nav ${location.pathname === item.link ? "active" : ""}`}>
                        <Link className="link" to={item.link}>{item.title}</Link>
                    </div>
                ))}
            </div>
            <button className="toggle-button" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <>{crosIcon({ width: 22, height: 22, fill: "#fff" })}</> : <>{barIcon({ width: 22, height: 22, fill: "#fff" })}</>}
            </button>
        </div>
    );
};

export default Header;
