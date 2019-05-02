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
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
      </head>
      <header>
        <div className="wrapper">
          <h1>Softball Lineup App</h1>
        </div>
        </header>
        <div className="container">
          {/* <section className='add-player'>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="playerName" placeholder="Name" onChange={this.handleNameChange} value={this.state.playerName}/>
              <input type="text" name="playerGender" placeholder="Gender" onChange={this.handleGenderChange} value={this.state.playerGender}/>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="female" value="female" />
                <label class="form-check-label" for="female">Female</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="male" value="male" />
                <label class="form-check-label" for="male">Male</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="non-binary" value="non-binary" />
                <label class="form-check-label" for="non-binary">Non Binary</label>
              </div>
              <button>Add Player</button>
            </form>
          </section> */}
          {/* <section className='display-player'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div> */}
          {/* </section> */}

          <div class="card">
            <div class="card-header">
              <strong>Player</strong>
            </div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
  <label class="form-check-label" for="inlineRadio3">3</label>
</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
