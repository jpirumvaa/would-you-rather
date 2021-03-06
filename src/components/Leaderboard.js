import React, { Component } from 'react'
import {connect} from 'react-redux'


class Leaderboard extends Component {
    render() {
        
        const {users,authedUser}= this.props


        const usersWithScore = {};
        Object.keys(users).forEach(uid => {
            const user = users[uid];
            const answLength = Object.keys(user.answers).length;
            const questLength = user.questions.length;
            user.score = answLength + questLength;
            usersWithScore[uid] = user;
        });

        const usersWithScoreSorted = {};
        Object.keys(users)
            .map(uid => users[uid])
            .sort((a, b) => b.score - a.score)
            .forEach(user => {
            usersWithScoreSorted[user.id] = user;
        });
        let rank= 0;

        return (
            <div>
                {authedUser===''?
                <div className="leader-board center">
                    <h2>Welcome to the Leaderboard!!!</h2>
                    <h4>Please log in to get started!</h4>
                    <h3>Not Ready to Login Now?</h3>
                    <p>Natigate the App to see basic functionalities</p>
                </div>:
                
            <div>
            {Object.keys(usersWithScoreSorted).map(uid=>{
                const user=usersWithScoreSorted[uid]
                const answLength = Object.keys(user.answers).length;
                const questLength = user.questions.length;
                const score = answLength + questLength;
                rank++


                return(
                    <div key={uid} className="leader-board flex-display">
                        <div className="flex-display">
                            <h2 className="rank">{rank}</h2>
                            <img
                            src={user.avatarURL}
                            alt={`Avatar of ${user.name}`}
                            className="avatar"/>
                            <div className="q-and-a">
                                <h3>{user.name}</h3>                
                                <p className="bord-top"> Asked <b>{questLength}</b> questions</p>
                                <p> Answered <b>{answLength}</b> questions</p>
                            </div>
                            
                        </div>

                        <div className="center">
                            <h4>Scores</h4>
                            <h3 className='score'>{score}</h3>
                        </div> 

                    </div>
                        
                )

        })}

            </div>
            }
            </div>
        )
    }
}

const mapStateToProps=({users,authedUser})=>{
    return{
    users,
    authedUser
    }
    }

export default connect(mapStateToProps)(Leaderboard)
