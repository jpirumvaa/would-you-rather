import React, { Component } from 'react'
import {connect} from 'react-redux'

class Leaderboard extends Component {
    render() {
const {name, avatar, questLength, answLength,score}=this.props

        return (
            <div className="leader-board">

                <div class="user-info">
                    <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className="avatar"/>
                    <div className="q-and-a">
                        <h3>{name}</h3>                
                        <p> Asked <b>{questLength}</b> questions</p>
                        <hr/>
                        <p> Answered <b>{answLength}</b> questions</p>
                    </div>
                    
                </div>

                <div className="center">
                    <h4>Scores</h4>
                    <h3 className='score'>{score}</h3>
                </div>           

            </div>
        )
    }
}

const mapStateToProps=({users}, {id})=>{
const name= users[id].name
const avatar= users[id].avatarURL
const questLength= users[id].questions.length 
const answ= users[id].answers
const answLength= Object.keys(answ).length
const score= questLength+ answLength

return{
name: name,
avatar: avatar,
questLength: questLength,
answLength: answLength,
score: score
}
}

export default connect(mapStateToProps)(Leaderboard)
