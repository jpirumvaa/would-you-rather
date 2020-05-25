import React, { Component } from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class QuestionAndResult extends Component {
    render() {
        const {questionsIds} = this.props
        return (
            <div>
                {questionsIds.map((id)=>(
                <li key={id}>
                    <Question id={id}/>
                </li>
            ))}
            </div>
        )
    }
}

function mapStateToProps({questions}){
    return{
        questionsIds: Object.keys(questions),
        
    }
}
export default connect(mapStateToProps)(QuestionAndResult)
