import React from 'react'

class UserScore extends React.Component {
  render() {
    const { user } = this.props
    // component data
    const answeredQuest = Object.keys(user.answers).length
    const createdQuest = user.questions.length
    const totalScore = answeredQuest + createdQuest

    return (
      <div id='user-card' className="card my-4 poll-item">
        <div className="card-body">
          <div className="row d-flex flex-row justify-content-center">
            <div className="col-3 text-center">
              <img className="user-image" src={user ? user.avatarURL : ''} alt="user" />
            </div>
            <div className="col-4">
              <h3>{user.name}</h3>
              <p>Answered Questions : {answeredQuest}</p>
              <p>Created Questions : {createdQuest}</p>
            </div>
            <div className="col-3 text-center">
              <h6>Score</h6>
              <div className="score">{totalScore}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserScore