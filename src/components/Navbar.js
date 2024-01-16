import React, { useState, useEffect } from 'react';
import logo from '../img/navbar_logo.png'; // Adjust the path as needed
import phoneIcon from '../img/telephone_icon.png'; // Adjust the path as needed

export default function NavbarComponent() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [navbarDynamicStyle, setNavbarDynamicStyle] = useState({});

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                // When scrolled, apply these styles
                setNavbarDynamicStyle({
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s',
                });
            } else {
                // Reset to default styles when not scrolled
                setNavbarDynamicStyle({});
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarStyle = {
        backgroundColor: 'white',
        borderBottom: '2px solid #d3d3d3',
        width: '100%',
        ...navbarDynamicStyle, // Apply dynamic styles based on scroll
    };

    const navContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '0 100px', // Increased padding on both sides
    };

    const navContentStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
    };

    const navLinkStyle = {
        color: 'black',
        fontWeight: 'bold',
        textDecoration: 'none',
        margin: '0 30px', // Further increased spacing between nav items
    };

    const navLinkHoverStyle = {
        color: '#fcb700', // Color change on hover
    };

    const logoStyle = {
        height: '50px',
        width: 'auto',
    };

    const phoneStyle = {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '1rem',
        padding: '0 20px',
    };

    const phoneIconStyle = {
        height: '20px',
        marginRight: '5px',
    };

    const phoneHoverStyle = {
        color: '#fcb700', // Color change on hover for phone number
    };

    return (
        <nav className="navbar navbar-expand-lg" style={navbarStyle}>
            <div className="container-fluid" style={navContainerStyle}>
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Business Logo" style={logoStyle} />
                </a>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded={!isNavCollapsed ? true : false} 
                    aria-label="Toggle navigation" 
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
                    <ul className="navbar-nav" style={navContentStyle}>
                        <li className="nav-item" style={navLinkStyle}>
                            <a className="nav-link" href="#services" style={navLinkStyle} onMouseOver={(e) => e.currentTarget.style.color = navLinkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = 'black'}>Services</a>
                        </li>
                        <li className="nav-item" style={navLinkStyle}>
                            <a className="nav-link" href="#about-us" style={navLinkStyle} onMouseOver={(e) => e.currentTarget.style.color = navLinkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = 'black'}>About Us</a>
                        </li>
                        <li className="nav-item" style={navLinkStyle}>
                            <a className="nav-link" href="#gallery" style={navLinkStyle} onMouseOver={(e) => e.currentTarget.style.color = navLinkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = 'black'}>Gallery</a>
                        </li>
                        <li className="nav-item" style={navLinkStyle}>
                            <a className="nav-link" href="#contact-us" style={navLinkStyle} onMouseOver={(e) => e.currentTarget.style.color = navLinkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = 'black'}>Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div style={phoneStyle} onMouseOver={(e) => e.currentTarget.style.color = phoneHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = 'black'}>
                    <img src={phoneIcon} alt="Phone" style={phoneIconStyle} />
                    +1 234 567 8900 
                </div>
            </div>
        </nav>
    );
};
