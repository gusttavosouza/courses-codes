import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const AddButton = () => <Link to="/register"><button className="button--plus" >+</button></Link>;

export { AddButton };
