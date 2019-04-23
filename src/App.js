import React, { Component } from 'react';
import Routing from './routing';
import './App.css';
import $ from "jquery";

class App extends Component {
  render() {
    $(document).ready(function(){
      $("#formButton").click(function(){
          $("#hello").toggle();
      });
  });
    return (
      <div>
        <style>{'body { background-color: black; }'}</style>
        <button type='button' id='formButton'>MENU</button>
        <ul className="nav" id="hello">
          <li  className="nav-item">
            <a className="nav-link active" href="/home">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/page1">ABOUT US</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/page3">CONTACT US</a>
          </li>
        </ul>
        <div>
          <Routing/>
        </div>
      </div>
    );
  }
}
export default App;
