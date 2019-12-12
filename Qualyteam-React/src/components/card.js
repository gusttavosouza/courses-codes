import React from "react";
import { Button } from "./button";
import { Link } from "react-router-dom"


const Card = ({ id, title, description, imageUrl, ingredients }) => (
  <div className="card">
    <div className="card--content">
      <h2 className="card--title">{title}</h2>
      <p className="card--description">{description}</p>
      <div className="card--footer">
        <sub className="card--ingredients">{ingredients}</sub>
        <Link to={`/recipe/${id}`} ><Button>Acessar</Button></Link>
      </div>
    </div>
    <figure className="card--image">
        <div className="card--image--background" style={{backgroundImage: `url(${imageUrl})`}}></div> 
    </figure>
  </div>
);
export { Card };
