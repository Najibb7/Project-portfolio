import React from 'react';
import { NavLink } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <div className='notFound'>
                <div className="notFoundContent">
                    <h3>Cette page n'existe pas !</h3>
                    <NavLink to="/" >
                            <i className="fa-solid fa-house"></i>
                            <span>Accueil</span>
                        </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Notfound;