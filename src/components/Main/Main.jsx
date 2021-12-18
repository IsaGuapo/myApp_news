import React, { Component } from "react";
import axios from "axios";
import Home from '../Home';
import Form from '../Form';
import List from '../List';

import {Route, Routes } from 'react-router-dom'//Para uso de todas las rutas

class Main extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       addNew:[]
     
    }
  }

  async componentDidMount(){
    try{
      const newAxios = await axios.get(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${process.env.REACT_APP_APIKEY}`);
      // console.log(newAxios);
      const data = newAxios.data.results.slice(0,5)
      //concateno dos arrays con las noticias que trae axios y las creadas
      const result = data.concat(this.state.addNew)
      console.log(data)
      this.setState({addNew: result})  
    } catch (e){
      console.log("error")
    }
  }

  //funcion para borrar una noticia
  deleteNew =(i) =>{
    const card = this.state.addNew.filter((card, j) => j !== i)
        this.setState({ addNew: card })
  }

  //funcion para crear noticias--relacionado con el form
  createNews = (sectiontitle,published_date,abstract) => {
    const news = {sectiontitle,published_date,abstract}
  this.setState({ addNew: [...this.state.addNew, news] })
    
  }
  
  render() {
    return <main>
      <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/form" element ={<Form createNews={this.createNews} />} />
          {/* Este state data nos da el estado del la creacion de la nueva noticia */}
          <Route path="/list" element ={<List stateData={this.state.addNew} deleteNew={this.deleteNew} componentDidMount={this.componentDidMount}/>} />  
      </Routes>  
    </main>;
  }
}

export default Main;
