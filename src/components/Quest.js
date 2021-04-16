import React from 'react'
import { connect } from 'react-redux'

class Quest extends React.Component {
  render() {
    const { question, userQuest } = this.props
    const user = userQuest[0]
    // console.log('quest: ', userQuest)

    return (
      <div className="card my-4 poll-item" key={question.id}>
        <h6 className="card-header-custom">{user.name}
          <span> asks:</span>
        </h6>
        <div className="card-body">
          <div className="row">
            <div className="col-3 text-center">
              <img className="user-image" src={user ? user.avatarURL : ''} alt="user" />
            </div>
            <div className="col-9">
              <h6>Would You Rather...?</h6>
              <p>{question.optionOne.text.substring(0, 10)}...</p>
              {/* {
                answered === 'unanswered'
                  ? <Link className="btn btn-primary" to={path1}>Submit</Link>
                  : <Link className="btn btn-primary" to={path2}>View Answer</Link>
              } */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ quests, authedUser, users }, { id }) => {
  const question = quests[id]
  const userQuest = Object.values(users).filter(user => user.id === question.author)

  return {
    question,
    userQuest
  }
}

export default connect(mapStateToProps)(Quest)