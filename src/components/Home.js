import React from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import { handleHomeData } from '../actions/shared'

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleHomeData())
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {
          this.props.loading === true 
          ? null
          : <div>This is the Home</div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ quests }) => ({
  loading: Object.keys(quests).length === 0
})

export default connect(mapStateToProps)(Home)