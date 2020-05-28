import React, { Component,Fragment } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import Nav from './Nav'
import Leaderboard from './Leaderboard'
import Home from './Home'
import LogIn from './LogIn'
import NewQuestion from './NewQuestion'


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
            <Route path='/new' component={NewQuestion}/>
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