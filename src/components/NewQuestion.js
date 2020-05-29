import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {handleSaveQuestion} from '../actions/questions'
import {Redirect}from 'react-router-dom'

class NewQuestion extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            optionOneText:"",
            optionTwoText: "",
            toHome: false

        }
    }

    handleOptionOneChange=(e)=>{
        this.setState({
            optionOneText: e.target.value,
        })
    }

    handleOptionTwoChange=(e)=>{
        this.setState({
            optionTwoText: e.target.value,
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const {optionOneText, optionTwoText}= this.state
        const {dispatch,authedUser}= this.props
        
        if(optionOneText!==''||optionTwoText!==''){
        dispatch(handleSaveQuestion({optionOneText, optionTwoText,authedUser}))
        this.setState({
            optionOne:"",
            optionTwo: '',
            toHome: true
        })
    }
    }
    render() {
        
    const {toHome}= this.state

    if (toHome===true) {
        return <Redirect to={`/`} />
    }


        const {authedUser}= this.props
        return (
            <div className="container">
                {authedUser===''?(
                    <div className='leader-board center'>
                        <h3>Thank you for using Would You Rather App</h3>
                        <p className="bord-top">Unfortunately, you cannot post a question before you log in</p>
                        <NavLink to='/login' exact activeClassName="active"><b>Log In to ask a Question</b></NavLink>
                    </div>
                ):(
                <div className="leader-board">
                    <h1 className="center">Create a New Question</h1>
                    <p className="bord-top">Complete the following question:</p>
                    <h2>Would You Rather</h2>
                    <form onSubmit={this.handleSubmit} className="center">
                        <input
                        className="input-field"
                        type="text"
                        placeholder="Enter the first option"
                        value={this.state.optionOne} onChange={this.handleOptionOneChange}
                        />
                        <h2 className="center">OR</h2>
                        <input
                        className="input-field"
                        type="text"
                        placeholder="Enter the second option"
                        value={this.state.optionTwo} onChange={this.handleOptionTwoChange}
                        />
                        <button className="btn">Submit</button>
                    </form>
                </div>
                )}
            </div>
        )
    }
}

const mapStateToProps=({authedUser})=>{
return{
    authedUser,
}
}
export default connect(mapStateToProps)(NewQuestion)
