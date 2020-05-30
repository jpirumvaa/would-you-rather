import React, { Component,Fragment } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import {setAuthedUser} from '../actions/authedUser'
import LoadingBar from 'react-redux-loading-bar'
import Nav from './Nav'
import Leaderboard from './Leaderboard'
import Home from './Home'
import LogIn from './LogIn'
import NewQuestion from './NewQuestion'
import PrivateRoute from './PrivateRoute'
import AnsweredQuestions from './AnsweredQuestions'
import UnAnsweredQuestions from './UnAnsweredQuestions'
import QuestionAndResult from './QuestionAndResult'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
    this.props.dispatch(setAuthedUser(""))
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Nav/>         

          <div className="container">
          <Route path='/login' component={LogIn}/>
            <PrivateRoute path='/' exact component={Home}/>
            <PrivateRoute path='/leaderboard' component={Leaderboard}/>
            <PrivateRoute path='/new' component={NewQuestion}/>
            <PrivateRoute path='/' exact component={UnAnsweredQuestions}/>
            <PrivateRoute path='/answered' exact component={AnsweredQuestions}/>            
            <PrivateRoute path='/question/:id' exact component={QuestionAndResult}/>
          </div>
        </Fragment>
      </Router>


    )
  }
}


export default connect() (App)