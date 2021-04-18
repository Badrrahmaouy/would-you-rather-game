import React from 'react'

class UserScore extends React.Component {
  render() {
    const { user } = this.props

    return (
      <div id='user-card' className="card my-4 poll-item">
        <div className="card-body">
          <div className="row d-flex flex-row justify-content-center">
            <div className="col-3 text-center">
              <img className="user-image" src={user ? user.avatarURL : ''} alt="user" />
            </div>
            <div className="col-4">
              <h3>{user.name}</h3>
              <p>Answered Questions : {Object.keys(user.answers).length}</p>
              <p>Created Questions : {user.questions.length}</p>
            </div>
            <div className="col-3 text-center">
              <h6>Score</h6>
              <div className="score">{Object.keys(user.answers).length + user.questions.length}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserScore