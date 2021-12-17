
import React, { Component } from "react";
import Card from './Card'


class List extends Component {


  paintNews = () => {
    return this.props.stateData.map((card, i) => <Card info={card} deleteNew={() => this.props.deleteNew(i)} key={i} />)
  }

  // deleteNew =(i) =>{
  //   const card = this.state.topNews.filter((card, j) => j !== i)
  //       this.setState({ topNews: card })
  // }

  
  render() {
            
            return <div>

              <p> Precarga de 5 noticias de la API + las nuevas dadas de alta</p>
              
              {this.paintNews()}
             
            </div>
            
            
  }
}

export default List;
