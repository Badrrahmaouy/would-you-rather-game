import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleHomeData } from '../actions/shared'
import QuestsList from './QuestsList'
class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleHomeData())
  }

  render() {
    const { answeredQuest, unansweredQuest } = this.props
    
    // sorting questions and answers
    const answeredQuestSorted = answeredQuest.sort((a, b) => (
      b.timestamp - a.timestamp
    ))
    const unansweredQuestSorted = unansweredQuest.sort((a, b) => (
      b.timestamp - a.timestamp
    ))
    
    return (
      <div>
        <div className='center'>
          <Tabs defaultActiveKey='unanswered' className='mx-auto d-flex flex-row justify-content-center'>
            <Tab eventKey='unanswered' title="Unanswered">
              <QuestsList quests={unansweredQuestSorted} answered={'unanswered'} />
            </Tab>
            <Tab eventKey='answered' title="Answered">
              <QuestsList quests={answeredQuestSorted} answered={'answered'} />
            </Tab>
          </Tabs>
        </div>
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
    answeredQuest,
    unansweredQuest
  }
}

export default connect(mapStateToProps)(Home)