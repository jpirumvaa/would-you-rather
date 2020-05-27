import React, { Component } from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import AnsweredQuestions from './AnsweredQuestions'
import UnAnsweredQuestions from './UnAnsweredQuestions'

class Home extends Component {
  render() {

    return (
      <Router>

        <div className="container">
          <div className="center">
            <nav className="nav home-nav">
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName="active">Answered Questions</NavLink>
                    </li>
                    
                    <li>
                    <NavLink to='/unanswered' activeClassName="active">UnAnswered Questions</NavLink>
                    </li>

                </ul>
            </nav>
          </div>
          <div>
            <Route path='/' exact component={AnsweredQuestions}/>
            <Route path='/unanswered' component={UnAnsweredQuestions}/>
          </div>

        </div>
      </Router>
      
    )
  }
}

function mapStateToProps({users}){
  return{
      usersIds: Object.keys(users),

      
  }
}


export default connect(mapStateToProps) (Home)