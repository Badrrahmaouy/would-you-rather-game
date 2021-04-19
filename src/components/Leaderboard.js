import React from 'react'
import { connect } from 'react-redux'
import UserScore from './UserScore'

class Leaderboard extends React.Component {
  render() {
    const { users } = this.props

    return (
      <div className="py-5 container">
        <div className="row d-flex flex-row justify-content-center">
          <div className="col-8 bg-white p-3">
            {
              users.map((user, index) => (
                <div className="position-relative" key={index}>
                  <UserScore user={user} />

                  {index === 0
                    ? <div className="prize-tag gold">1st</div>
                    : index === 1 ? <div className="prize-tag silver">2nd</div>
                      : <div className="prize-tag bronze">3rd</div>
                  }
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

const totalScore = user => {
  const total = Object.keys(user.answers).length + user.questions.length
  return total
}

const mapStateToProps = ({ users }) => {
  const sortedUsers = Object.values(users).sort((a, b) => (
    totalScore(b) - totalScore(a)
  ))

  return {
    users: sortedUsers
  }
}

export default connect(mapStateToProps)(Leaderboard)