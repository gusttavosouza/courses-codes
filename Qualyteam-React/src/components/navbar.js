import React from "react";
import logo from "../logo.png";
import { AddButton } from "./add-button";
const Navbar = ({handleChange}) => (
  <nav className="navbar">
    <figure className="navbar--logo-container">
      <img src={logo} alt="Uma imagem impressionante" />
    </figure>
    <div className="navbar--center-container">
      <input role="search" onChange={(event) => handleChange(event.target.value)} placeholder="Procure uma receita" aria-labelledby="search"/>
    </div>
    <div className="navbar--right-container">
        <AddButton />
    </div>
  </nav>
);

export { Navbar };
