import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <strong className="footer">Copyright reserved @ {new Date().toDateString()}</strong>
        </div>
    );
};

export default Footer;