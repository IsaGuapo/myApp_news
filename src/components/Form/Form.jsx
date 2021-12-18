import React, { Component } from "react";

// import { Link } from "react-router-dom";
import './Form.css';
import {Navigate} from 'react-router-dom';



class Form extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      redirect: false,
    }
  }

 //recojo info del formulario   
  handleSubmit = (event) => {
    event.preventDefault();
  //Por aqui paso los datos que recojo del formulario
    const section = event.target.section.value
    const title = event.target.titular.value
    const published_date = event.target.date.value
    const abstract = event.target.abstract.value
  
    //Por aqui entran cada uno de los elementos del form
    this.props.createNews(section,title,published_date,abstract)
    this.setState({ redirect: true }); //cambiamos el state de redirect a True cuando se hace click 
  }
   
  


  render() {
    if (this.state.redirect) {
      return <Navigate to='/list'/>;
    }
    return <div className="container">
      <h2 className="h2_form">Register News</h2>
        <form id="form" onSubmit={this.handleSubmit}>
          <label htmlFor="section">Section:</label><br />
          <input type="text" id="section" name="section" /><br />
          <label htmlFor="titular">Headline:</label><br />
          <input type="text" id="titular" name="titular" /><br />
          <label htmlFor="date">Date:</label><br />
          <input type="date" id="date" name="date" /><br />
          <label htmlFor="abstract">News:</label><br />
          <input type="textarea" id="abstract" name="abstract" /><br />
          <br>
          </br>
          <button>Add</button>

      </form>
      
    </div>;
  }

}
export default Form;
