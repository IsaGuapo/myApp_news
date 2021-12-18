import React, { Component } from "react";
import {userContext} from '../../Context/userContext'//se pegara esta linea en cada componente donde queremos usar el context

class Home extends Component {
  static contextType = userContext //coge el contexto que importamos y se lo pasa a la clase


  constructor(props) {
    super(props)
    this.name = React.createRef() //sirve para crear la referencia
  
  }
  

  handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value // se rellena por referencia
    this.setState({ name })
    // contexto  login
    const {login} = this.context
    login(name);
    this.name.current.value=""
}


  render() {
    return <div>
      <h1> Home</h1>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Escriba su nombre de Usuario:</label><br />
        <input type="text" id="name" name="name" ref={this.name} /><br />
        <input type="submit" value="Enviar"/>
      </form>
    </div>;
  }
}

export default Home;
