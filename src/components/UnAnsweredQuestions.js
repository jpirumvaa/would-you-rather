import React, { Component } from 'react'
import UnAnswered from './UnAnswered'
import {connect} from 'react-redux'


class UnAnsweredQuestions extends Component {
    render() {
        return (
            <div>
            {this.props.questionsIds.map((id)=>(
                <li key={id}>
                    <UnAnswered id={id}/>
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
export default connect(mapStateToProps)(UnAnsweredQuestions)
