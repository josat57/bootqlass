import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-toggle"><i className="toggle-icon">X</i></div>
            <div className="brand">
                <div className="brand-logo"></div>
                <div className="brand-name">BootQlass</div>
            </div> 
            <ul className="nav-bar">
                <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Membership</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About Us</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Sign In</a></li>
            </ul> 
        </nav>
    )
}

export default Navbar