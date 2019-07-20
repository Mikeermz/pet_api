import React from 'react';

const Navbar = () => (
    <div className="Navbar">
        <div className="Navbar-container">
            <div className="Navbar-logo">
                <figure>
                    <img src="/" alt="Logo"/>
                </figure>
            </div>
            <div className="Navbar-pets">
                <button>Pets</button>
            </div>
            <div className="Navbar-search">
                <input type="text"/>
                <input type="submit"/>
            </div>
            <div className="Navbar-owner">
                <button>Adopt</button>
            </div>
        </div>
    </div>
);

export default Navbar;