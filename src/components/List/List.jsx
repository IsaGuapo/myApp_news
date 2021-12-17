
import React, { Component } from "react";
import Card from './Card'
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props)
  
    this.state = { 
      topNews:[],
            
       
    }
  }

  async componentDidMount(){
    try{
      const newAxios = await axios.get(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${process.env.REACT_APP_APIKEY}`);
      // console.log(newAxios);
      const data = newAxios.data.results.slice(0,5)
      const result = data.concat(this.props.stateData)
      console.log(data)
      this.setState({topNews: result})  
    } catch (e){
      console.log("error")
    }
       
  
  }

  paintNews = () => {
    return this.state.topNews.map((card, i) => <Card info={card} deleteNew={() => this.deleteNew(i)} key={i} />)
  }

  deleteNew =(i) =>{
    const card = this.state.topNews.filter((card, j) => j !== i)
        this.setState({ topNews: card })
  }

  
  render() {
            
            return <div>

              <p> Precarga de 5 noticias de la API + las nuevas dadas de alta</p>
              
              {this.paintNews()}
             
            </div>
            
            
  }
}

export default List;
