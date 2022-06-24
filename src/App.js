import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';




class App extends Component {

  render() { 
    return (
      <div className='App'>
        <nav>
          <h1>CV Generator</h1>
        </nav>
        <Form />
      </div>
    );
  }
}
 
export default App;
