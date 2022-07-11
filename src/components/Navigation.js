import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <h3>Najib BARAKA</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink to="/" activeclassname="nav">
                            <i className="fa-solid fa-house"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/competences" activeclassname="nav">
                            <i className="fa-solid fa-code"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio" activeclassname="nav">
                            <i className="fa-solid fa-folder-plus"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contacts" activeclassname="nav">
                            <i className="fa-solid fa-address-card"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/najib-baraka-195766232/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Najibb7" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                </ul>

                <div className="signature">
                    <p> FromScratch - 2022 ©️</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;