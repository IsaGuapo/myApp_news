import './Card.css';
import React, { Component } from 'react';



export class Card extends Component {
  constructor(props) {
    super(props)
  // enviamos el estado del array a List
    this.state = {
       //guardamos el [] de noticiar creadas por nosotros = lo que haya en FORM
    }
  }
  
  
    render ()  {
      const {section,title,published_date,abstract} = this.props.info
      return (
        <div className="cards">
            <p>Sección: {section} </p>
            <p>Titular: {title} </p>
            <p>Fecha:{published_date}</p>
            <p>Noticia: {abstract}</p>
            <button onClick={this.props.deleteNew}>Borrar</button>
           
        </div>
    );
  }
}

export default Card;