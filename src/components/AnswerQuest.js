import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-bootstrap'
import { handleSaveAnswer } from '../actions/quests'

class AnswerQuest extends React.Component {
  state = {
    selectedOption: ''
  }

  handleSubmit = e => {
    e.preventDefault()

    
    const { dispatch, authedUser, id, history } = this.props
    const { selectedOption } = this.state


    dispatch(handleSaveAnswer({
      authedUser, 
      id, 
      selectedOption
    }))

    history.push(`/quests/view/${id}`)
  }

  render() {
    const { userQuest, id, quest } = this.props
    const user = userQuest[0]

    return (
      <div className="container">
        <div className="row d-flex flex-row justify-content-center">
          <div className="col-8">
            <div className="card p-3">
              <div className="py-5 mx-5">
                <div className="card my-4 poll-item" key={id}>
                  <h6 className="card-header">{user.name}
                    <span> asks:</span>
                  </h6>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-3 text-center">
                        <img className="user-image" src={user ? user.avatarURL : ''} alt="user" />
                      </div>
                      <div className="col-9">
                        <h6>Would You Rather...?</h6>
                        <Form className="py-3">
                          <div className="mb-3">
                            {/* answer one */}
                            <Form.Check
                              type="radio"
                              id={'groupOptions' + id + 1}
                              className="my-2"
                              name={'groupOptions' + id}
                              label={quest[0].optionOne ? quest[0].optionOne.text : ''}
                              checked={this.state.selectedOption === 'optionOne'}
                              onChange={e => {
                                this.setState({ selectedOption: "optionOne" })
                              }} 
                            />
                            {/* answer two */}
                            <Form.Check
                              type="radio"
                              id={'groupOptions' + id + 2}
                              className="my-2"
                              name={'groupOptions' + id}
                              label={quest[0].optionTwo ? quest[0].optionTwo.text : ''}
                              checked={this.state.selectedOption === 'optionTwo'}
                              onChange={e => {
                                this.setState({ selectedOption: "optionTwo" })
                              }} 
                            />
                          </div>
                        </Form>
                        {/* submit button */}
                        <button 
                          className="btn btn-primary" 
                          disabled={this.state.selectedOption === ''}
                          onClick={this.handleSubmit}
                        >
                          Submit
                        </button>
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

const mapStateToProps = ({ quests, authedUser, users }, props) => {
  const { id } = props.match.params
  const quest = Object.values(quests).filter(quest => quest.id === id)
  const userQuest = Object.values(users).filter(u => u.id === quest[0].author)

  return {
    id, 
    quest: quest,
    userQuest,
    authedUser
  }
}

export default connect(mapStateToProps)(AnswerQuest)