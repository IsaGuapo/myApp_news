// import axios from "axios";
import React, { Component } from "react";
import Card from './Card'

const axios = require('axios');


class List extends Component {
  constructor(props) {
    super(props)
  
    this.state = { 
      topNews:[],
      searchNews: []
      
       
    }
  }

  async componentDidMount(){
    const newAxios = await axios.get('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=zGBjnMpFL4CT1jA5fNOIIeMUWe9N1YUo');
    console.log(newAxios);
    const data = newAxios.data.results
          this.setState({
            topNews: data.results
        })
        console.log('componentDidMount');
  
  }

  paintNews = () => {
    return this.state.topNews
  }

  // handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const searchedCity = this.city.current.value // hacemos uso del valor del campo por referencia
  //   this.setState({ searchedCity }) //actualizamos el valor de searchedCity 
  //   const weatherAxios = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&units=metric&lang=ES&appid=0b3cd5494d54dc46d622ccfc9f8045a6`);
  //   const data = weatherAxios.data.list[0].main.temp;
  //   const detailData = weatherAxios.data.list;
  //   console.log(detailData)
  //   this.setState({
  //     cityWeather: data, 
  //     detailWeather: detailData
  //     // paintCityWeather(data)
  //   })
  //   this.city.current.value = ""
  // }
  render() {
            
            return <div>
              <p> Precarga de 5 noticias de la API + las que has dado de alta</p>
              {this.paintNews()}
              <Card topNews={this.state.topNews}></Card>
            </div>
            
            
  }
}

export default List;
