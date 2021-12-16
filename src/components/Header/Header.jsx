import React, { Component, Fragment } from "react";
import Nav from '../Nav/Nav'
import './Header.css';
import {userContext} from '../../Context/userContext'


class Header extends Component {
 
  render() {
    return <header className="navbar">
      <Nav />
      <userContext.Consumer>
                {
                //Usando fragment sin necesidad de escribirlo entre <> y usando un condicional ternario
                    ({user,logout}) => user.name?
                    <>
                        <h3>Hola {user.name}</h3>
                        <button onClick={logout}>Logout</button>
                    </> 
                    : <h3>Adios</h3>//--> else  
                    
                }
                </userContext.Consumer>
    </header>;
  }
}

export default Header;
