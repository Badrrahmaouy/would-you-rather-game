import React from "react"
import { connect } from "react-redux"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { handleInitialData } from "../actions/shared"
import Home from "./Home"
import Login from './Login'
import Nav from "./Nav"
import AnswerQuest from './AnswerQuest'
import NewQuest from './NewQuest'
import ViewAnswer from './ViewAnswer'
import Leaderboard from "./Leaderboard"
import LoadingBar from "react-redux-loading-bar"
import ErrorPage from "./Errorpage"


class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { loading } = this.props

    return (
      <BrowserRouter>
        <div className="App">
          <LoadingBar />
          {
            loading === true
            ? <Route component={Login} />
            : <>
                <Nav />
                <hr id='hr' />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/quests/answer/:id' component={AnswerQuest} />
                  <Route path='/quests/view/:id' component={ViewAnswer} />
                  <Route path='/add' component={NewQuest} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/quests/bad_id' component={ErrorPage} />
                </Switch>
            </>
          }
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null
})

export default connect(mapStateToProps)(App)
