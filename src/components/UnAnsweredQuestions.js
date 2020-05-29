import React, { Component } from 'react'
import UnAnswered from './UnAnswered'
import {connect} from 'react-redux'


class UnAnsweredQuestions extends Component {
    
    render() {
        const {authedUser,questions,questionsIds}= this.props
        const sortedIds= questionsIds.sort((a,b)=>questions[b].timestamp-questions[a].timestamp)
        return (
            <div>
                {authedUser!==""&&(

                sortedIds.map((id)=>(
                    <li key={id}>
                        <UnAnswered id={id}/>
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
        questions
        
    }
}
export default connect(mapStateToProps)(UnAnsweredQuestions)
