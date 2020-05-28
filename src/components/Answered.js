import React, { Component } from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/_DATA'
import {Link} from 'react-router-dom'

class Answered extends Component {
    render() {
        const {name, avatar, optionOneText,opt1, opt2, authedUser,question,id}= this.props
        return (
            <div>
                {(opt2.includes(authedUser) || opt1.includes(authedUser)) && (
                    <div className="leader-board">
                        <h3>{name} asks:</h3>
                        <div className="flex-display bord-top">
                            <img
                                src={avatar}
                                alt={`Avatar of ${name}`}
                                className="avatar"/>
                            <div className='bord-left'>
                                <h3>Would you rather</h3>
                                <p>.......{optionOneText}......</p>
                                <Link to={`/question/${id}`}>
                                    <button className="btn" type="submit">
                                        View Full
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
        )
    }
}

const mapStateToProps= ({users, questions, authedUser}, {id})=>{
    const name= users[questions[id].author].name
    const avatar= users[questions[id].author].avatarURL
    const optionOneText= questions[id].optionOne.text
    const optionTwoText= questions[id].optionTwo.text
    const opt1= questions[id].optionOne.votes
    const opt2= questions[id].optionTwo.votes
    const question= questions[id]
    const author= name

    return{
        name,
        avatar,
        optionOneText,
        optionTwoText,
        authedUser,
        opt1,
        opt2,
        author,
        question:formatQuestion({optionOneText, optionTwoText, author}),
        id
    }
}

export default connect(mapStateToProps)(Answered)
