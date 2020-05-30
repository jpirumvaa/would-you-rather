import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import {Redirect} from 'react-router-dom'


export class LogIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            value:"",
            toHome: false

        }
    }
    

    handleChange=(e)=>{
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const {dispatch}= this.props
        dispatch(setAuthedUser(this.state.value))
        this.setState(()=>({
            toHome: this.state.value===""?false:true
        }))
    }


    render() {
        const {users}= this.props
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const {toHome}= this.state
        if(toHome===true){
            return <Redirect to={from}/>
        }

        return (
            <div className="leader-board center">

                <div className="head">
                    <h2>Welcome to the Would You Rather Game</h2>
                    <h4>An App Developed by <b>Jean Pierre Imanirumva</b></h4>
                </div>                    
                <p>Please sign in to continue!</p>
                <br/>
                <img alt="App Developer" src="data:image/jpeg;base64,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" className="avatar"/>
                <h2>Sign in</h2>
                
                <form onSubmit={this.handleSubmit}>
                    <label>
                    <select className="input-field" value={this.state.value} onChange={this.handleChange}>
                        <option value="">None</option>
                        {Object.keys(users).map((id)=>{
                            const avatar= users[id].avatarURL
                            const userName= users[id].name

                            return(

                            //I  want to add avatars to the options. How can I add an image to select's options?
                            <option key={id} value={id} data-icon={avatar}>{userName}</option>
                            )
                        })}
                        
                    </select>
                    </label>
                    <input className='btn' type="submit" value="Sign in" />
                </form>
            </div>
        )
    }
}

const mapStateToProps =({users, authedUser})=>{
return{
    users,
    authedUser

}
}

export default connect(mapStateToProps) (LogIn)
