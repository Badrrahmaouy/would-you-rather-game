import React from 'react'
import Quest from './Quest'

class QuestsList extends React.Component {
  render() {
    const { quests, answered } = this.props

    return (
      <>
        {
          quests.length > 0 
          ? quests.map(quest => (
            <Quest key={quest.id} id={quest.id} answered={answered} />
          ))
          : <p className='no-quests'>You have answered all questions.</p>
        }
      </>
    )
  }
}

export default QuestsList