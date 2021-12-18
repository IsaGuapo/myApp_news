import React, { Component } from 'react';
import './Card.css';


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
            <p className='p_class'>Section: {section} </p>
            <p className='p_class'>Headline: {title} </p>
            <p className='p_class'>Date:{published_date}</p>
            <p className='p_class'>Abstract: {abstract}</p>
            <button onClick={this.props.deleteNew}>Delete</button>
           
        </div>
    );
  }
}

export default Card;