import React from "react"
import { connect } from "react-redux"
import { handleInitialData } from "./actions/shared"
import LoadingBar from 'react-redux-loading-bar'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <>
        <div className="App">
        <LoadingBar />
          Would you rather
        </div>
      </>
    )
  }
}

export default connect()(App)
