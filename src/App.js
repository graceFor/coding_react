//import React from 'react';
import React, { Component } from "react";
import Nav from "./components/Nav";
import Content from "./components/Contents";
import Subject from "./components/Subject";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Nav></Nav>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
