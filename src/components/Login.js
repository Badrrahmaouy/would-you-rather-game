import React from "react"
import { Form } from "react-bootstrap"
import { connect } from "react-redux"
import { setAuthedUser } from "../actions/authedUser"

class Login extends React.Component {
  state = {
    authedUser: 'default'
  }

  handleChange = e => {
    const user = e.target.value
    this.setState(() => ({
      authedUser: user
    }))
  }

  handleSubmit = e => {
    e.preventDefault()

    const { authedUser } = this.state

    this.props.dispatch(setAuthedUser(authedUser))
    this.props.history.push('/')
  }

  render() {
    const { users } = this.props
    const { authedUser } = this.state

    return (
      <div className="container py-5">
        <div className="row d-flex flex-row justify-content-center">
          <div className="col-6">
            <div className="card p-5 my-5">
              <h1 className="py-5 text-center">Welcome</h1>
              <Form.Group>
                <Form.Label>Choose User:</Form.Label>
                <Form.Control 
                  as="select" 
                  onChange={this.handleChange}
                  value={authedUser}
                >
                  <option value='default' disabled>choose user</option>
                  {
                    users.map(user =>(
                      <option value={user} key={user}>{user}</option>
                    ))
                  }
                </Form.Control>
              </Form.Group>
              <button type='submit'
                onClick={e => this.handleSubmit(e)} 
                className="btn btn-primary mt-5"
                disabled={authedUser === 'default'}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({
  users: Object.keys(users)
})

export default connect(mapStateToProps)(Login)