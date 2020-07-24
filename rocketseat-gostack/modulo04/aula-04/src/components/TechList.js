import React , { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  state = {
    techs:  [
      'Node.Js',
      'ReactJs',
      'React-Native'
    ],
    newTech: ''
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({techs: [...this.state.techs, this.state.newTech],
    newTech: ''})
  }

  handleDelete = (tech)=> {
    this.setState({ techs: this.state.techs.filter(t => t !== tech)})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          { this.state.techs.map((tech, key) => ( <TechItem tech={tech} key={key} handleDelete={this.handleDelete} />))
        }
        </ul>
        <input type="text" onChange={this.handleInputChange} value={this.state.newTech}/>

        <button type="submit">Enviar</button>
      </form>
    )
  }
}
export default TechList;