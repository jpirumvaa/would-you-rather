import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'

class UnAnswered extends Component {
    render() {
        const {name, avatar, optionSample, opt1, opt2, authedUser}= this.props
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
                                <button className="btn">View Full</button>
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
        name: name,
        avatar: avatar,
        optionSample: optionSample,
        authedUser,
        opt1: opt1,
        opt2: opt2,
    }
}

export default connect(mapStateToProps)(UnAnswered)
