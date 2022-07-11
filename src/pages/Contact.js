import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className="contactContent">
                <div className="header">
                    <div className="contactBox">
                        <h1> Contactez-moi </h1>
                        <ul>
                            <li>
                                <i className="fa-solid fa-map"></i>
                                <span> Montpellier </span>
                            </li>
                            <li>
                                <i className="fa-solid fa-mobile-screen-button"></i>
                                <CopyToClipboard text="0781218641">
                                    <span
                                        onClick={() => {
                                            alert('numéro de téléphone copié !');
                                        }}
                                        className="clickInput"> 07 81 21 86 41 </span>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <i className="fa-solid fa-at"></i>
                                <CopyToClipboard text="Najib.baraka@epitech.eu">
                                    <span
                                        onClick={() => {
                                            alert('e-mail copié !');
                                        }}
                                        className="clickInput"
                                    > Najib.baraka@epitech.eu </span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;