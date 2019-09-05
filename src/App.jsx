import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import './App.css';
import PlayerTable from './PlayerTable'

const db = firebase.collection('players')

const App = () => {
  const [playerName, setPlayerName] = useState('')
  const [playerGender, setPlayerGender] = useState('')
  const [players, setPlayers] = useState([])

  useEffect(() => {
    db.onSnapshot((querySnapshot) => {
      var playerList = []
      querySnapshot.forEach(doc => {
        playerList.push(doc.data())
      })
      setPlayers(playerList)
    })
  }, [])

  const handleNameChange = event => {
    setPlayerName(event.target.value)
  }

  const handleGenderChange = event => {
    setPlayerGender(event.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    db.doc(playerName).set({
      name: playerName,
      gender: playerGender
    })
    .then(() => {
      console.log('Player added', playerName)
    })
    .catch(err => console.log('Error saving to DB', err))
  }
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
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" className="form-control" id="player-name" placeholder="Enter name" onChange={handleNameChange} value={playerName}/>
                  <div className="radio-button-group">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="Male" id="gender-male" value="Male" onChange={handleGenderChange} checked={playerGender === 'Male'} />
                      <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="Female" id="gender-female" value="Female" onChange={handleGenderChange} checked={playerGender === 'Female'} />
                      <label className="form-check-label">Female</label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary float-right">Add player</button>
                  </div>
              </form>
            </div>
            </div>
          </div>
            <PlayerTable players={players}/>
        </div>
      </div>
    </div>
  );
} 

export default App;
