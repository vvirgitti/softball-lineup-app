import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
              <form>
                <input type="text" name="name" placeholder="What's your name?" />
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
}

export default App;
