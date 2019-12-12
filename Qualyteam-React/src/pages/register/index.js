import React from "react";
import { Button } from "../../components/button";
import Axios from "axios";
import { Redirect } from "react-router-dom"


class Register extends React.Component {

  state = {
    title: "",
    imagem: "",
    ingredients: "",
    description: ""
  }

  handleChange = (atributo, value) => {
    this.setState({ [atributo]: value });
  };

save = async (event) => {
    event.preventDefault()
    await Axios.post("http://localhost:4000/food", this.state);
    this.props.history.push("/")
  }


  render() {
    return (<div className="register">
      <h1>Nova receita</h1>
      <div className="register--container">
        <form onSubmit={this.save} className="register--container--form">
          <div className="register--container--side">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input id="title" onChange={value => this.handleChange("title", value.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="image">Imagem (URL)</label>
              <input id="image" onChange={value => this.handleChange("imagem", value.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="ingredients">Ingredientes</label>
              <textarea id="ingredients" onChange={value => this.handleChange("ingredients", value.target.value)} />
            </div>
          </div>
          <div className="register--container--side">
            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <textarea id="description" onChange={value => this.handleChange("description", value.target.value)} />
            </div>
          </div>
        <Button type="submit">Create</Button>
        </form>
      </div>
    </div>);
  }



}

export { Register };
