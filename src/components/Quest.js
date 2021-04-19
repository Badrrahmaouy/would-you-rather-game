import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Quest extends React.Component {
  render() {
    const { question, userQuest, answered } = this.props
    const user = userQuest[0]
    const pathAnswer = '/quests/answer/' + question.id
    const pathView = `/quests/view/${question.id}`

    return (
      <div className="card my-4 poll-item">
        <h6 className="card-header-custom">{user.name}
          <span> asks:</span>
        </h6>
        <div className="card-body">
          <div className="row">
            <div className="col-3 text-center">
              <img className="user-image" src={user ? user.avatarURL : ''} alt="user" />
            </div>
            <div className="col-9">
              <h6>Would You Rather?</h6>
              <p>{question.optionOne.text.substring(0, 10)}...</p>
              {
                answered === 'answered'
                  ? <Link className="btn btn-primary" to={pathView}>View Answer</Link>
                  : <Link className="btn btn-primary" to={pathAnswer}>Answer</Link>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ quests, users }, { id, answered }) => {
  const question = quests[id]
  const userQuest = Object.values(users).filter(user => user.id === question.author)

  return {
    question,
    userQuest,
    answered
  }
}

export default connect(mapStateToProps)(Quest)