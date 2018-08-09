import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.db = firebase.firestore().collection('players')
    this.state = {
      playerName: '',
      playerGender: '',
      players: []
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleGenderChange = this.handleGenderChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
 
  handleNameChange(event) {
    this.setState({playerName: event.target.value})
  }

  handleGenderChange(event) {
    this.setState({playerGender: event.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    const playerRef = this.db.doc(this.state.playerName)
    playerRef.set({
      gender: this.state.playerGender
    })
    console.log('Player added', this.state.playerName)
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
              <input type="text" name="playerName" placeholder="Name" onChange={this.handleNameChange} value={this.state.playerName}/>
              <input type="text" name="playerGender" placeholder="Gender" onChange={this.handleGenderChange} value={this.state.playerGender}/>
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
