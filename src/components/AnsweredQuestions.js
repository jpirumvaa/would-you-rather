import React, { Component } from 'react'
import Answered from './Answered'
import {connect} from 'react-redux'


class AnsweredQuestions extends Component {
    render() {

        const{authedUser}=this.props
        return (
            <div>
                {authedUser===""?
                <div className="leader-board center">
                    <h2>Welcome to Would You Rather Game</h2>
                    <h4>Please log in to see answered questions!</h4>
                    <h3>Not Ready to Login Now?</h3>
                    <p>Check the Leaderboard to see the users' activities</p>
                </div>:
                this.props.questionsIds.map((id)=>(
                <li key={id}>
                    <Answered id={id}/>
                </li>
            ))}
            
        </div>
        )}
}

function mapStateToProps({questions, authedUser}){
    return{
        questionsIds: Object.keys(questions),
        authedUser,
        
    }
}
export default connect(mapStateToProps)(AnsweredQuestions)
