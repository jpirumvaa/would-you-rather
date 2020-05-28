import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class UnAnswered extends Component {
    render() {
        const {name, avatar, optionSample, opt1, opt2, authedUser, id}= this.props
        return (
            <Fragment>
                {(!(opt2.includes(authedUser) || opt1.includes(authedUser))) && (
                    <div className="leader-board">
                        <h3>{name} asks:</h3>
                        <div className="flex-display bord-top">
                            <img
                                src={avatar}
                                alt={`Avatar of ${name}`}
                                className="avatar"
                            />
                            <div className='bord-left'>
                                <h3>Would you rather</h3>
                                <p>.......{optionSample}......</p>
                                <Link to={`/question/${id}`}>
                                    <button className="btn" type="submit">
                                        View Full
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </Fragment>
        )
    }
}

const mapStateToProps= ({users, questions, authedUser}, {id})=>{
    const name= users[questions[id].author].name
    const avatar= users[questions[id].author].avatarURL
    const optionSample= questions[id].optionOne.text
    const opt1= questions[id].optionOne.votes
    const opt2= questions[id].optionTwo.votes

    return{
        name,
        avatar,
        optionSample,
        authedUser,
        opt1,
        opt2,
        id,
    }
}

export default connect(mapStateToProps)(UnAnswered)
