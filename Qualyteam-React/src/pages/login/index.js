import React from "react";
import { Button } from "../../components/button";
import logo from "../../logo.png";

const Login = ({preencheSenha, preencheEmail, login}) => (
  <div className="login">
      <figure>
          <img src={logo} alt="recipes" />
      </figure>
    <form className="login--form">
      <div className="login--form--inputscontainer">
        <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input onChange={(event) => preencheEmail(event.target.value)} id="email" name="email" />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={(event) => preencheSenha(event.target.value)} id="password" name="password" />
        </div>
      </div>
      
        <Button onClick={(event) => login(event)}> Entrar </Button>
    </form>
  </div>
);

export { Login };
