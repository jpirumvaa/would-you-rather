import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleSaveAnswer} from '../actions/questions'

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
        selectedOption: ""
        };
    }
    
    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };
    
    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        const {id, dispatch, authedUser}= this.props
        const {selectedOption} = this.state

        if(authedUser===""){
            <div>Sign in first</div>
        }else{
            dispatch(handleSaveAnswer(id,selectedOption))
        }

        

    //redirect to answers
    };

    render() {
        const {name, avatar, optionTwo, optionOne}= this.props

        return (
            <div className="leader-board">
                <h3>{name} asks:</h3>
                <div className="flex-display bord-top">
                    <img
                        src={avatar}
                        alt={`Avatar of ${name}`}
                        className="avatar"
                    />


                    <div className="bord-left">
                        <h2>Would you rather</h2>

                        <form onSubmit={this.handleFormSubmit}>
                            <label>
                            <input
                                type="radio"
                                name='question'
                                value='optionOne'
                                onChange={this.handleOptionChange}
                            />
                            {optionOne}
                            </label><br/>

                            <label>
                                <input
                                    type="radio"
                                    name='question'
                                    value='optionTwo'
                                    onChange={this.handleOptionChange}
                                />
                                {optionTwo}
                            </label>
                            <button className="btn" type="submit">
                                Submit
                            </button>

                        </form>

                    </div>


                </div>
                

                
            </div>
        )
    }
}

const mapStateToProps=({users, questions, authedUser}, {id})=>{
    const name= users[questions[id].author].name
    const avatar= users[questions[id].author].avatarURL

    const optionOne= questions[id].optionOne.text
    const optionTwo= questions[id].optionTwo.text




    return{
        authedUser,
        name,
        avatar,
        optionOne,
        optionTwo,
        
    }
}
export default connect(mapStateToProps) (Question)
