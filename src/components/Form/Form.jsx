import React, { Component } from "react";

class Form extends Component {
  render() {
    return <div>
      <h2>Alta de nueva Noticia</h2>

      <form>
        <label htmlFor="section">Sección:</label><br />
        <input type="text" id="section" name="section" /><br />
        <label htmlFor="titular">Titular:</label><br />
        <input type="text" id="titular" name="titular" /><br />
        <label htmlFor="date">Fecha:</label><br />
        <input type="text" id="date" name="date" /><br />
        <label htmlFor="abstract">Noticia:</label><br />
        <input type="text" id="abstract" name="abstract" /><br />
        <input type="submit" />
    </form>
    </div>;
  }
}

export default Form;
