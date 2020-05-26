import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import Nav from './Nav'
import Leaderboard from './Leaderboard'
import Home from './Home'
import QuestionAndResult from './QuestionAndResult'
import LogIn from './LogIn'






class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {usersIds}= this.props



    return (
      <div className="container">
        <LoadingBar />

        {/* 
        <Home/>
        <Leaderboard/>
        <QuestionAndResult/>
        
        */}
        <LogIn/>
        
        
        
        
        
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