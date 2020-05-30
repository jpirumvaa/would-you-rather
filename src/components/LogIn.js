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
        const {toHome}= this.state
        if(toHome===true){
            return <Redirect to='/'/>
        }

        return (
            <div className="leader-board center">

                <div className="head">
                    <h2>Welcome to the Would You Rather Game</h2>
                    <h4>An App Developed by <b>Jean Pierre Imanirumva</b></h4>
                </div>                    
                <p>Please sign in to continue!</p>
                <br/>
                <img alt="App Developer" src="https://scontent.fkgl2-1.fna.fbcdn.net/v/t1.0-0/p180x540/100790493_1198297713864948_1839846848668368896_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_eui2=AeHUvCH5H1-BHovKMzdPmBkQzSa-sogy8cbNJr6yiDLxxlQDFUqaasE0HRZR-whq22m7lqWF4XC1op_J3dMhB8uI&_nc_ohc=PEDSFm7TaiQAX-b5u0W&_nc_ht=scontent.fkgl2-1.fna&_nc_tp=6&oh=bfc2a4d5a9aad157b5345542d53207f8&oe=5EF27100" className="avatar"/>
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
