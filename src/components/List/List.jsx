
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
              <h2> Top Five</h2>
              {this.paintNews()}
            </div>         
  }
}

export default List;
