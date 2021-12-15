import React, { Component } from "react";

class Home extends Component {
  render() {
    return <div>
      <h1> Home</h1>
      <form>
        <label htmlFor="name">Escriba su nombre de Usuario:</label><br />
        <input type="text" id="name" name="name"  /><br />
        <input type="submit" value="Login"/>
      </form>
    </div>;
  }
}

export default Home;
