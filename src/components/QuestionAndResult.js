import React, { Component } from 'react'
import {connect} from 'react-redux'
import Question from './Question'
import Results from './Results'

class QuestionAndResult extends Component {
    
    render() {
        const {id, questions, authedUser,users}= this.props
        console.log(users)
        return (
            <div>
                {questions[id]!==undefined?
                <div>
                    {
                        ((questions[id].optionOne.votes.includes(authedUser))
                        ||(questions[id].optionTwo.votes.includes(authedUser)))?
                            <Results id={id}/>: <Question id={id}/>
                    }
                </div>
                :
                <div>
                    404 The Question you are looking for is not available.
                </div>
                }
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser,users}, props){
    const {id}= props.match.params
return{
id,
authedUser,
questions,
users
}
}
export default connect(mapStateToProps)(QuestionAndResult)
