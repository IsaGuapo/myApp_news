import React, { Component } from "react";

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
    return <div>
      <h2>Alta de nueva Noticia</h2>

      <form onSubmit={this.handleSubmit}>
        <label htmlFor="section">Sección:</label><br />
        <input type="text" id="section" name="section" /><br />
        <label htmlFor="titular">Titular:</label><br />
        <input type="text" id="titular" name="titular" /><br />
        <label htmlFor="date">Fecha:</label><br />
        <input type="date" id="date" name="date" /><br />
        <label htmlFor="abstract">Noticia:</label><br />
        <input type="text" id="abstract" name="abstract" /><br />
        <input type="submit" value="Crear" />
    </form>
    </div>;
  }
}

export default Form;
