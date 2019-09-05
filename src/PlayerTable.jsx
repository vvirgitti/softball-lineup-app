import React from 'react'

export default class PlayerTable extends React.Component {
  constructor() {
    super()
  }

  render() {

    return (
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
            <tr>
              <td>Carlos</td>
              <td>Male</td>
              <td>0.500</td>
            </tr>
          </tbody>
        </table>
    </div>
    )
  }
}
