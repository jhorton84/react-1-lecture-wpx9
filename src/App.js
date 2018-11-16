import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <h1 className='title'>!Facebook</h1>
        <h1>Friend's List</h1>
        <p>Name:</p>
        <input placeholder="friend's Name here"></input>
        <button>Add Friend</button>
        <p>You don't have any friends!</p>
      </div>
    );
  }
}

export default App;
