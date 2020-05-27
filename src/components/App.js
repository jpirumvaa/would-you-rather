import React, { Component,Fragment } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
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
      <Router>
        

        <Fragment>
          <LoadingBar />
          <Nav/>         

          <div className="container">
            <Route path='/' exact component={Home}/>
            <Route path='/leaderboard' component={Leaderboard}/>
            <Route path='/login' component={LogIn}/>
            {/*The purpose of this route(the one below) is to ensure that whenever I click View Full button on a question(A button
            Located on home route, either in answered or unanswered) get a question I am clicking on. It should be an answer if the
            question was answered, or a question if it was not answered.
            The problem is that whenever I click View Full button on a question, I am failing to render a 
            single question's response or question which has the same id as the one i am clicking on. 
            
            Even rendering a full component requeres to reflesh the app.
             */}
            <Route path='/questionandresult' component={QuestionAndResult}/>
          </div>

        </Fragment>
      </Router>
      
    )
  }
}

function mapStateToProps({users}){
  return{
      usersIds: Object.keys(users),

      
  }
}


export default connect(mapStateToProps) (App)