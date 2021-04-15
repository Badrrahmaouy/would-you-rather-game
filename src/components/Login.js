import React from "react"
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
  }

  render() {
    const { users } = this.props
    const { authedUser } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <select value={authedUser} onChange={this.handleChange}>
          <option value='default' disabled>choose user</option>
          {
            users.map(user => (
              <option key={user} value={user}>{user}</option>
            ))
          }
        </select>
        <button type='submit'>log in</button>
      </form>
    )
  }
}

const mapStateToProps = ({ users }) => ({
  users: Object.keys(users)
})

export default connect(mapStateToProps)(Login)