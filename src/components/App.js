import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import Nav from './Nav'
import Leaderboard from './Leaderboard'



class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {

    return (
      <div className="container">
        <LoadingBar />
        {this.props.usersIds.map((id)=>(
          <li key={id}>
            <Leaderboard id={id}/>
          </li>
        ))}
        
        </div>
    )
  }
}

function mapStateToProps({users}){
  return{
      usersIds: Object.keys(users),
      
  }
}


export default connect(mapStateToProps) (App)