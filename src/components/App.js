import React from "react"
import { connect } from "react-redux"
import { handleInitialData } from "../actions/shared"
import Home from "./Home"
import Login from './Login'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { loading } = this.props

    return (
      <>
        {
          loading === true
          ? <Login />
          : <div className="App">
              Would you rather
              <Home />
            </div>
        }
      </>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null
})

export default connect(mapStateToProps)(App)
