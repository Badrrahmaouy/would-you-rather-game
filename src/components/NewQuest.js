import React from 'react'
import { Button, Form } from 'react-bootstrap'

class NewQuest extends React.Component {
  state = {

  }

  render() {
    return(
      <div className="container py-5">
        <div className="row d-flex flex-row justify-content-center">
          <div className="col-8">
            <div className="card p-5">
              <h6 className="text-center">Would You Rather?</h6>
              <Form>
                <Form.Group className="py-2" controlId="optionOne" >
                  <Form.Label>Option One</Form.Label>
                  <Form.Control type="text" placeholder="Type Option One" value={this.state.optionOneText} onChange={(e) => this.setState({ optionOneText: e.target.value })} />
                </Form.Group>

                <Form.Group className="py-2" controlId="optionTwo" >
                  <Form.Label>Option Two</Form.Label>
                  <Form.Control type="text" placeholder="Type Option One" value={this.state.optionTwoText} onChange={(e) => this.setState({ optionTwoText: e.target.value })} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={e => this.saveQuestion(e)}>
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

export default NewQuest