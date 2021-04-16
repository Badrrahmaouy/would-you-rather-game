import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import { handleHomeData } from '../actions/shared'
import QuestsList from './QuestsList'

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
          quests.length === 0 
          ? null
          : <div className='center'>
              <h3>Home</h3>
              <Tabs defaultActiveKey='unanswered' className='mx-auto d-flex flex-row justify-content-center'>
                <Tab eventKey='unanswered' title="Unanswered">
                  <QuestsList quests={unansweredQuest} />
                </Tab>
                <Tab eventKey='andwered' title="Answered">
                  <QuestsList quests={answeredQuest} />
                </Tab>
              </Tabs>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ quests, authedUser }) => {
  const answeredQuest = []
  const unansweredQuest = []
  const questsArray = Object.keys(quests)
  for(let quest of questsArray) {
    let scannedQuest = quests[quest]
    scannedQuest.optionOne['votes'].includes(authedUser) || scannedQuest.optionTwo['votes'].includes(authedUser)
    ? answeredQuest.push(scannedQuest)
    : unansweredQuest.push(scannedQuest)
  }

  return {
    quests: questsArray,
    answeredQuest,
    unansweredQuest
  }
}

export default connect(mapStateToProps)(Home)