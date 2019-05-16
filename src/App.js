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
          <div className="wrapper">
            <h1>Softball Lineup App</h1>
          </div>
        </header>
        <div className="container">
          <div class="row">
            <div class="col-sm">
              <div class="card">
                <div class="card-header">
                  <strong>Add Player</strong>
              </div>
              <div class="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <input type="text" class="form-control" id="player-name" placeholder="Enter name" onChange={this.handleNameChange} value={this.state.playerName}/>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="male" id="gender-male" value="male" onChange={this.handleGenderChange} checked={this.state.playerGender === 'male'} />
                      <label class="form-check-label" for="male">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="female" id="gender-female" value="female" onChange={this.handleGenderChange} checked={this.state.playerGender === 'female'} />
                      <label class="form-check-label" for="female">Female</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="non-binary" id="gender-non-binary" value="non-binary" onChange={this.handleGenderChange} checked={this.state.playerGender === 'non-binary'} />
                      <label class="form-check-label" for="non-binary">Non binary</label>
                    </div>
                    <button type="submit" class="btn btn-primary float-right">Add player</button>
                    </div>
                </form>
              </div>
              </div>
            </div>
            <div class="col-sm"></div>
            <div class="col-sm"></div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
