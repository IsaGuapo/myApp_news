import React, { Component } from "react";
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
  createNews = (sectiontitle,published_date,abstract) => {
    const news = {sectiontitle,published_date,abstract}
  this.setState({ addNew: [...this.state.addNew, news] })
    
  }
  
  render() {
    return <main>
      <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/form" element ={<Form createNews={this.createNews}/>} />
          {/* Este state data nos da el estado del la creacion de la nueva noticia */}
          <Route path="/list" element ={<List stateData={this.state.addNew}/>} />  
      </Routes>  
    </main>;
  }
}

export default Main;
