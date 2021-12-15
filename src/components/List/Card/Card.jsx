import './Card.css';
import React, { Fragment } from 'react';

const Card = ({ searchNews }) => {
    return (
        <div className="cards">
            {
            searchNews.map(topNews => 
              <div >
                  <p>Sección: {topNews.section} </p>
                  <p>Titular: {topNews.title} </p>
                  <p>Fecha:{topNews.published_date}</p>
                  <p>Noticia: {topNews.abstract}</p>
                  <hr />
              </div>
            )
            }
        </div>
    );
}

Card.defaultProps = {
  searchNews: []
  }

export default Card;