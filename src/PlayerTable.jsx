import React from 'react'

export default class PlayerTable extends React.Component {
  render() {
    if (this.props.players.length <= 0) {
      return null
    }

    return (
      <div className ="col-8">
        <div className="card">
          <div className="card-header">
              <strong>List of players</strong>
          </div>
            <div className="table=responsive"> 
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Stats</th>
                </tr>
              </thead>
              <tbody>
                {this.props.players.map((player) => (
                  <tr className="player-table" key={player.name}>
                    <td className="table-player-name">{player.name}</td>
                    <td className="table-player-gender">{player.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
