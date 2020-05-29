import React, { Component } from 'react'
import Answered from './Answered'
import {connect} from 'react-redux'


class AnsweredQuestions extends Component {
    render() {
        const {authedUser,questions,questionsIds}= this.props
        const sortedIds= questionsIds.sort((a,b)=>questions[b].timestamp-questions[a].timestamp)
        return (
            <div>
            {authedUser!==""&&(
                sortedIds.map((id)=>(
                    <li key={id}>
                        <Answered id={id}/>
                    </li>
                ))
                )}
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser}){
    return{
        questionsIds: Object.keys(questions),
        authedUser,
        questions,
        
    }
}
export default connect(mapStateToProps)(AnsweredQuestions)
