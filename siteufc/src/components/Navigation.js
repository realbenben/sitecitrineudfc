import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
    return (
        <div className="nav-bar">
            <Logo />

        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
               <h1> Accueil</h1>
            </NavLink>
            <NavLink exact to="histoire" activeClassName="nav-active">
            <h1> Le club</h1>
            </NavLink>
            <NavLink exact to="membres" activeClassName="nav-active">
            <h1>Membres</h1>
            </NavLink>
            <NavLink exact to="infos" activeClassName="nav-active">
            <h1> Infos utiles</h1>
            </NavLink>
       
            <NavLink exact to="contact" activeClassName="nav-active">
            <h1>Contact</h1>
            </NavLink>
            </div>
        </div>
    );
};

export default Navigation;