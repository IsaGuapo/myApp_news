// import logo from './logo.svg';
import './App.css'
import { useState } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import {BrowserRouter} from 'react-router-dom'
import { userContext } from './Context/userContext';



function App() {
  const [user, setUser] = useState({ name: "" })
  const login = name => setUser({ name }) //Cambia el estado con un nuevo nombre
  const logout = () => setUser({ name:"" }) //Vacia el nombre con funcio set

  const value = {
    user,
    login,
    logout
   
  }

  return (
    <div className="App">
      <BrowserRouter>
      <userContext.Provider value={value}>
        <Header/>
        {/* <img src={logo} className="App-logo" alt="logo"/> */}
        <Main/>
      </userContext.Provider>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
