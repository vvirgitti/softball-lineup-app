import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      playerName: '',
      playerGender: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const playersRef = firebase.database().ref('players')
    const player = {
      name: this.state.playerName,
      gender: this.state.playerGender
    }
    playersRef.push(player)
    this.setState({
      playerName: '',
      playerGender: ''
    })
  }

  render() {
    return (
      <div className="App">
      <header>
        <div className='wrapper'>
          <h1>Softball Lineup App</h1>
        </div>
        </header>
        <div className='container'>
          <section className='add-player'>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="playerName" placeholder="What's your name?" onChange={this.handleChange} value={this.state.playerName}/>
              <input type="text" name="playerGender" placeholder="What's your gender?" onChange={this.handleChange} value={this.state.playerGender}/>
              <button>Add Player</button>
            </form>
          </section>
          <section className='display-player'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
};

export default App;
