import React, { Component } from 'react'
import {connect} from 'react-redux'
import Question from './Question'
import Results from './Results'

class QuestionAndResult extends Component {
    render() {
        const {questionsIds, questions, authedUser} = this.props

        return (
            <div>
                {questionsIds.map((id)=>(
                <li key={id}>
                    {((questions[id].optionOne.votes.includes(authedUser))
                    ||(questions[id].optionTwo.votes.includes(authedUser)))?
                        <Results id={id}/>: <Question id={id}/>}
                </li>
            ))}
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser}){

    return{
        questionsIds: Object.keys(questions),
        questions,
        authedUser


    }
}
export default connect(mapStateToProps)(QuestionAndResult)
