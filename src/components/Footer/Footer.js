import React from 'react';
import ContactBar from '../ContactForm/ContactBar';

const Footer = () => {
    return(
        <footer className="flex justify-end items-center bg-dark-gray pv2 ph4-m ph5-l white">
            <small className="f6 db tr">© 2021 Developed by <b class="ttu light-blue">Kyle Hulvey</b></small>
            <div className="ml4"><ContactBar /></div>
        </footer>
    );
}

export default Footer;