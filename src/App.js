import React, { Component } from 'react';
import './App.css';
import './assets/css/style.css';
import  './assets/css/materialize.min.css';
import './assets/css/font-awesome.min.css';
import Header from'./components/Header';
import Main from'./components/Main';


class App extends Component {
  render() {
    return (
        <div className="row">
            <Header />
            <Main />
        </div>
    );
  }
}

export default App;
