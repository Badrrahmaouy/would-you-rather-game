import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { connect } from 'react-redux'

class ViewAnswer extends React.Component {
  render() {
    const { quest, userQuest, authedUser } = this.props
    const user = userQuest[0]
    const question = quest[0]

    // progress bar variables
    const optionOneVotes = question.optionOne['votes'].length
    const optionTwoVotes = question.optionTwo['votes'].length
    const totalVotes = optionOneVotes + optionTwoVotes
    const optionOnePercentage = (optionOneVotes / totalVotes) * 100
    const optionTwoPercentage = (optionTwoVotes / totalVotes) * 100

    return (
      <div className="container my-5">
        <div className="row d-flex flex-row justify-content-center">
          <div className="col-8">
            <div className="card p-3">
              <div className="py-5 mx-5">
                <div className="card my-4 poll-item" key={quest.id}>
                  <h6 className="card-header">{user.name}
                    <span> asks:</span>
                  </h6>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-3 text-center">
                        <img className="user-image" src={user ? user.avatarURL : ''} alt="user" />
                      </div>
                      <div className="col-9">
                        <h6>Results</h6>
                        {/* answer one */}
                        <div className="card vote-card p-2 m-3">
                          {
                            question.optionOne.votes.includes(authedUser)
                              ? <span className="yourvote-item">Your Vote</span>
                              : ''
                          }
                          <h6>{question.optionOne.text}</h6>
                          <ProgressBar 
                            bsPrefix='progress-custom'
                            variant={
                              optionOnePercentage > optionTwoPercentage 
                              ? 'success' 
                              : 'info'
                            } 
                            now={optionOnePercentage} 
                            label={`${optionOneVotes} out of ${totalVotes}`}
                          />
                        </div>
                        {/* answer two */}
                        <div className="card vote-card p-2 m-3">
                          {
                            question.optionTwo.votes.includes(authedUser)
                              ? <span className="yourvote-item">Your Vote</span>
                              : ''
                          }
                          <h6>{question.optionTwo.text}</h6>
                          <ProgressBar
                            bsPrefix='progress-custom'
                            variant={
                              optionOnePercentage < optionTwoPercentage 
                              ? 'success' 
                              : 'info'
                            } 
                            now={optionTwoPercentage} 
                            label={`${optionTwoVotes} out of ${totalVotes}`} 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = ({ quests, authedUser, users}, props) => {
  const { id } = props.match.params
  const quest = Object.values(quests).filter(quest => quest.id === id)
  const userQuest = Object.values(users).filter(u => u.id === quest[0].author)

  return {
    quest,
    userQuest,
    authedUser
  }
}

export default connect(mapStateToProps)(ViewAnswer)