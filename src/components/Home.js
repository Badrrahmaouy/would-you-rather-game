import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import { handleHomeData } from '../actions/shared'
import Leaderboard from './Leaderboard'
//import AnswerQuest from './AnswerQuest'
//import NewQuest from './NewQuest'
import QuestsList from './QuestsList'
//import ViewAnswer from './ViewAnswer'

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleHomeData())
  }

  render() {
    const { quests, answeredQuest, unansweredQuest } = this.props
    console.log('answeredQuest: ', answeredQuest)
    console.log('unansweredQuest: ', unansweredQuest)

    return (
      <div>
        <LoadingBar />
        {
          quests.length > 0 
            //? <AnswerQuest match={{ params: { id: "8xf0y6ziyjabvozdd253nd"}}} /> 
            //? <ViewAnswer match={{ params: { id: "vthrdm985a262al8qx3do"} }} /> 
            //? <NewQuest />
          ? <Leaderboard />
          : <div className='center'>
              <h3>Home</h3>
              <Tabs defaultActiveKey='unanswered' className='mx-auto d-flex flex-row justify-content-center'>
                <Tab eventKey='unanswered' title="Unanswered">
                  <QuestsList quests={unansweredQuest} answered={'unanswered'} />
                </Tab>
                <Tab eventKey='andwered' title="Answered">
                  <QuestsList quests={answeredQuest} answered={'answered'} />
                </Tab>
              </Tabs>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ quests, authedUser }) => {
  let answeredQuest = []
  let unansweredQuest = []
  const questsArray = Object.keys(quests)
  for(let quest of questsArray) {
    let scannedQuest = quests[quest]
    scannedQuest.optionOne['votes'].includes(authedUser) || scannedQuest.optionTwo['votes'].includes(authedUser)
    ? answeredQuest = [...answeredQuest, scannedQuest]
    : unansweredQuest = [...unansweredQuest, scannedQuest]
  }

  return {
    quests: questsArray,
    answeredQuest,
    unansweredQuest
  }
}

export default connect(mapStateToProps)(Home)