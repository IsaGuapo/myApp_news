import React, { Component } from "react";
import {userContext} from '../../Context/userContext'//se pegara esta linea en cada componente donde queremos usar el context
import './Home.css';
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
      <div className="home">
      <h2> Welcome to the App_News</h2>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">User:</label><br />
        <input type="text" id="name" name="name" ref={this.name} /><br />
        <input className="login" type="submit" value="Login"/>
      </form>
      </div>
      
    </div>;
  }
}

export default Home;
