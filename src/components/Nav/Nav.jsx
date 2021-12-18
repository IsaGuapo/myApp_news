import React, { Component } from "react";
import {Link} from 'react-router-dom';


class Nav extends Component {
  render() {
    return <nav className="overlay">
      <h1> Top News</h1>
      <h3> The best app of top news</h3>
      <ul>
        <li className="liNav"><Link to="/home">Home</Link></li>
        <li className="liNav"><Link to="/form">Form</Link></li>
        <li className="liNav"><Link to="/list">List</Link></li>
      </ul>
    </nav>;
  }
}

export default Nav;
