import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';
import PlayerTable from './PlayerTable'

class App extends Component {
  constructor() {
    super()
    this.db = firebase.collection('players')
    this.state = {
      playerName: '',
      playerGender: '',
      players: []
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleGenderChange = this.handleGenderChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getPlayer = this.getPlayer.bind(this)
  }
 
  handleNameChange(event) {
    this.setState({playerName: event.target.value})
  }

  handleGenderChange(event) {
    this.setState({playerGender: event.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.db.doc(this.state.playerName).set({
      gender: this.state.playerGender
    })
    .then(() => {
      console.log('>>>>>> Player added', this.state.playerName)
      this.setState({
        playerName: '',
        playerGender: ''
      })
    })
    .then(() => {
      this.getPlayer()
    })
    .catch(err => console.log('>>>>>> Error saving to DB', err))
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="wrapper">
            <h1>Softball Lineup App</h1>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="card">
                <div className="card-header">
                  <strong>Add Player</strong>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input type="text" className="form-control" id="player-name" placeholder="Enter name" onChange={this.handleNameChange} value={this.state.playerName}/>
                    <div className="radio-button-group">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="male" id="gender-male" value="male" onChange={this.handleGenderChange} checked={this.state.playerGender === 'male'} />
                        <label className="form-check-label">Male</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="female" id="gender-female" value="female" onChange={this.handleGenderChange} checked={this.state.playerGender === 'female'} />
                        <label className="form-check-label">Female</label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary float-right">Add player</button>
                    </div>
                </form>
              </div>
              </div>
            </div>
            <div className="col-8">
              <div className="card">
                <div className="card-header">
                    <strong>List of players</strong>
                </div>
                  <PlayerTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
