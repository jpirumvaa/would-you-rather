import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {setAuthedUser } from '../actions/authedUser'

class Nav extends Component {

    


    handleLogOut=(e)=>{
        e.preventDefault()
        const {dispatch}= this.props
        dispatch(setAuthedUser(''))

    }
    render() {
        const {authedUser,users}= this.props
        const user= users[authedUser]

        return (
            <div>
                <nav className="nav flex-display">
                    <ul>
                        <li>
                            <NavLink to='/' exact activeClassName="active">Home</NavLink>
                        </li>
                        
                        <li>
                            <NavLink to='/new'  activeClassName="active">Add Question</NavLink>
                        </li>

                        <li>
                            <NavLink to='/leaderboard' activeClassName="active">Leaderboard</NavLink>
                        </li>                        
                    </ul>
                    <div >                      
                                
                    {user===undefined?                   
                    <li className="top-margin">
                        <NavLink to='/login' exact activeClassName="active">Log In</NavLink>
                    </li>:
                    <span className="flex-display top-margin">
                    <li>Hello, <b>{user.name}</b></li>
                    <li>
                        <NavLink  to='/login' exact activeClassName="active" onClick={this.handleLogOut}>Log Out</NavLink>
                    </li>
                    </span>
                    }                                  


                    </div>
                </nav>
            </div>
        )
    }
}


const mapStateToProps= ({users,authedUser})=>{
    return{
        users,
        authedUser
    }
}
export default connect(mapStateToProps)(Nav)
