<<<<<<< HEAD
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <div className="nav-bar">
      <Logo />

      <div className="navigation">
        <NavLink exact to="/" activeClassName="nav-active">
          Accueil
        </NavLink>
        <NavLink exact to="histoire" activeClassName="nav-active">
          Histoire
        </NavLink>
        <NavLink exact to="infos" activeClassName="nav-active">
          Infos utiles
        </NavLink>
        <NavLink exact to="membres" activeClassName="nav-active">
          Membres
        </NavLink>
        <NavLink exact to="contact" activeClassName="nav-active">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
=======
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
    return (
        <div className="nav-bar">
            <Logo />

        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="histoire" activeClassName="nav-active">
                Histoire
            </NavLink>
            <NavLink exact to="infos" activeClassName="nav-active">
                Infos utiles
            </NavLink>
            <NavLink exact to="membres" activeClassName="nav-active">
                Membre
            </NavLink>
            <NavLink exact to="contact" activeClassName="nav-active">
                Contact
            </NavLink>
            </div>
        </div>
    );
};

export default Navigation;
>>>>>>> 5c23259ee3775ba5c2ea17c3b71b86cd3f56ec74
