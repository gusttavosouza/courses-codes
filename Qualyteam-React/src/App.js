import React, { Fragment } from "react";
import "./App.scss";
import { Navbar } from "./components/navbar";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { List } from "./pages/list";
import { Recipe } from "./components/Recipe";
import Axios from "axios";


class App extends React.Component {
  state = {
    listaReceitas: [],
    label: "",
    user:{
      email: "",
      password: ""
    },
    token: ""
  }

  handleChange = (value) => {
    this.setState({ label: value });
  };

  preencheEmail = (value) => {
    this.setState({ user: {...this.state.user,email: value} });
  };

  preencheSenha = (value) => {
    this.setState({ user: {...this.state.user, password: value} });
  };

  login = async(event) => {
    event.preventDefault()
    try {
      const { data } = await Axios.post("http://localhost:4000/auth/login", this.state.user)
      await this.setState({
        token: data
      })
      localStorage.setItem("token",this.state.token.access_token)
    } catch (error) {
      console.log(error)
    }
  }

  async componentDidMount() {
    try {
      const { data } = await Axios.get("http://localhost:4000/food", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      this.setState({
        listaReceitas: data
      })
      
    } catch (error) {
      
    }
  }

  retornaLista = () => {
    if (this.state.label === "") {
      return this.state.listaReceitas
    } else {
      return this.state.listaReceitas.filter((item) => {
        return item.title.toLowerCase().includes(this.state.label.toLowerCase())
      })
    }
  }



  render() {
    const list = this.retornaLista();
    return (<div className="app">
      {localStorage.getItem("token") !== "" ? (
        <Fragment>
          <Router>
            
            <Navbar handleChange={this.handleChange} />
            {console.log(this.state.label)}
            <main className="content--container">
              <Route path="/" exact render={() => <List listaReceitas={list} />} />
              <Route path="/recipe/:id" render={props => <Recipe {...props} />} />
              <Route path="/register" component={Register} />
            </main>
          </Router>
        </Fragment>
      )
        : (<Login login={this.login} preencheSenha={this.preencheSenha} preencheEmail={this.preencheEmail}/>)
      }
    </div>)
  }

}

export default App;
