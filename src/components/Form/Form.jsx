import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Form.css';



class Form extends Component {
  
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
   
 
  }


  render() {
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
          {/* <button>Add</button> */}

      </form>
      <div className=".div.btn">
        <Link className="add_btn" to='/list' > Add </Link>
      </div>
    </div>;
  }
}

export default Form;
