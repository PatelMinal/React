import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import Table from './Table.js';
import Button1 from './Button1.js';
import HideButton from './HideButton.js';
import TableProps from './TableProps.js';
import Header from './Header.js';
//import FormExample from './FormExample.js';




class App extends Component {
  constructor(){
    super();
    this.state = { header: "Available Trainers:"}

}
  render() {
    return (
<div>    
        <Nav />
        <Header headerProp={this.state.header} />
        <Button1 />
        <Table />
      
        <HideButton />
</div>

        );
       }
    }

export default App;
