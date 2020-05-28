import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

class NewQuestion extends Component {
    render() {
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
                    <form className="center">
                        <input
                        className="input-field"
                        type="text"
                        placeholder="Enter the first option"
                        />
                        <h2 className="center">OR</h2>
                        <input
                        className="input-field"
                        type="text"
                        placeholder="Enter the second option"
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
