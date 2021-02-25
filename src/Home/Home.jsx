import React, { Component } from 'react';
import Drink from "../Drink/Drink";
import '../Home/Home.css'
class Home extends Component {
  state = {  }
  render() { 
    return (
    <div className="home_drinks">
      <Drink />
      <Drink />
      <Drink />
      <Drink />
      <Drink />
      <Drink />
    </div> );
  }
}
 
export default Home;