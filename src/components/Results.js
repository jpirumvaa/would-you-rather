import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Card, Image, Segment} from 'semantic-ui-react'
import Progress from './Progress'

class Results extends Component {
    render() {
        const{name, avatar, optionOne, id, optionTwo, votesOne, votesTwo, authedUser}= this.props

        const optOneVotes= votesOne.length
        const optTwoVotes= votesTwo.length
        const totalVotes= optOneVotes + optTwoVotes
        const optOnePercent = Math.round((optOneVotes / totalVotes) * 10000) / 100;
        const optTwoPercent = Math.round((optTwoVotes / totalVotes) * 10000) / 100;

        const votedOptOne = votesOne.includes(authedUser);
        const votedOptTwo = votesTwo.includes(authedUser);
        return (
            <Card key={id} className="leader-board">
                <Card.Content>
                
                <Card.Header><h3>Asked by {name}</h3></Card.Header>
                    <Segment className='flex-display bord-top'>
                        <Image
                            src={avatar}
                            alt={`Avatar of ${name}`}
                            className="avatar"
                            />
                    
                        <Card.Description className='bord-left'>
                            <Segment>
                                {votedOptOne&&(
                                    <h4>This is Your Response</h4>
                                )}
                                <Segment>
                                    <p>Would you rather {optionOne}?</p>
                                    <Progress score={optOnePercent}/>
                                    <p className="center"><b>{optOneVotes}</b> out of <b>{totalVotes}</b> votes</p>                                    
                                </Segment>
                                
                            
                            </Segment>
                            
                            <Segment className='bord-top'>
                                {votedOptTwo&&(
                                    <h4>This is Your Response</h4>
                                )}
                                <Segment>
                                    <p>Would you rather {optionTwo}?</p>
                                    <Progress score={optTwoPercent}/>
                                    <p className="center"><b>{optTwoVotes}</b> out of <b>{totalVotes}</b> votes</p>                                    
                                </Segment>
                            </Segment>

                        </Card.Description>
                    </Segment>
                </Card.Content>
                

            
            </Card>
        )
    }
}

const mapStateToProps=({users, questions, authedUser}, {id})=>{
    const name= users[questions[id].author].name
    const avatar= users[questions[id].author].avatarURL
    const optionOne= questions[id].optionOne.text
    const optionTwo= questions[id].optionTwo.text
    const votesOne= questions[id].optionOne.votes
    const votesTwo= questions[id].optionTwo.votes
    

    return{
        name:name,
        avatar:avatar,
        optionOne,
        optionTwo,
        votesOne,
        votesTwo,
        authedUser
    }
}
export default connect(mapStateToProps) (Results)

