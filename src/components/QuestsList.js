import React from 'react'
import Quest from './Quest'

class QuestsList extends React.Component {
  render() {
    const { quests } = this.props

    return (
      <div>
        {
          quests.map(quest => (
            <div key={quest.id}><Quest id={quest.id} /></div>
          ))
        }
      </div>
    )
  }
}

export default QuestsList