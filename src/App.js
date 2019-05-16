import Firestore from './firebase';
import React, { Component } from 'react';
import './App.css';

const db = new Firestore() 

class App extends Component {
  constructor() {
    super()
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
    db.addPlayer(this.state.playerName, this.state.playerGender)
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
          <div className="row">
            <div className="col-sm">
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
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="non-binary" id="gender-non-binary" value="non-binary" onChange={this.handleGenderChange} checked={this.state.playerGender === 'non-binary'} />
                        <label className="form-check-label">Non binary</label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary float-right">Add player</button>
                    </div>
                </form>
              </div>
              </div>
            </div>
            <div className="col-sm"></div>
            <div className="col-sm"></div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
