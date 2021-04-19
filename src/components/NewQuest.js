import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleSaveQuest } from '../actions/quests'

class NewQuest extends React.Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState(state => ({
      ...state,
      [name]: value
    }))
  }

  handleSubmit = e => {
    e.preventDefault()

    const { dispatch, history } = this.props
    const { optionOne, optionTwo } = this.state
    dispatch(handleSaveQuest(optionOne, optionTwo))

    history.push('/')
  }

  render() {
    const { optionOne, optionTwo } = this.state

    return(
      <div className="container py-5">
        <div className="row d-flex flex-row justify-content-center">
          <div className="col-8">
            <div className="card p-5">
              <h6 className="text-center">Would You Rather?</h6>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="py-2" controlId="optionOne" >
                  <Form.Label>Option One</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type Option One" 
                    name='optionOne'
                    value={optionOne} 
                    onChange={this.handleChange} 
                  />
                </Form.Group>

                <Form.Group className="py-2" controlId="optionTwo" >
                  <Form.Label>Option Two</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Type Option Two" 
                    name='optionTwo'
                    value={optionTwo} 
                    onChange={this.handleChange} 
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  disabled={optionOne === '' || optionTwo === ''}
                  >
                  Save Question
								</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(NewQuest)