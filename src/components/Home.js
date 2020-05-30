import React, { Component } from 'react'
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'


class Home extends Component {
  render() {
const {authedUser}= this.props
    return (
      <Router>

        <div className="container">
          <div className="center">
          {authedUser===""?
                <div className="leader-board center">
                    <h2>Welcome to Would You Rather Game!!!</h2>
                    <p className='bord-top'>Developer: <b>Jean Pierre Imanirumva</b></p>
                    <h4>We are glad you are here. Please log in to get started!</h4>
                    <h3>Not Ready to Login Now?</h3>
                    <p>Natigate the App to see basic functionalities</p>
                </div>:
            <nav className="nav home-nav">
                <ul>
                  <li>
                      <NavLink to='/answered' exact activeClassName="active">Answered Questions</NavLink>
                  </li>
                  <li>
                    <NavLink to='/' exact activeClassName="active">UnAnswered Questions</NavLink>
                  </li>                  

                </ul>
            </nav>
            }
          </div>


        </div>
      </Router>
      
    )
  }
}

function mapStateToProps({users, authedUser}){
  return{
      usersIds: Object.keys(users),
      authedUser

      
  }
}


export default connect(mapStateToProps) (Home)