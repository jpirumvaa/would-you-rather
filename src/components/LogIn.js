import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'


export class LogIn extends Component {
    state={
        value:""
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
    }


    render() {
        const {users}= this.props

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Join Twitter as:<br/>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="">None</option>
                        {Object.keys(users).map((id)=>{
                            const avatar= users[id].avatarURL
                            const userName= users[id].name

                            return(

                            
                            <option key={id} value={id} data-icon={avatar}>{userName}</option>
                            )
                        })}
                        {/*<option value="jpirumva">Jean Pierre Imanirumva</option>
                        <option value="isaac_komeza">Isaac Komezusenge</option>
                        <option value="eliab_ishimwe">Eliab Ishimwe</option> */}
                        
                    </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button onClick={this.logOut}>Log Out</button>
            </div>
        )
    }
}

const mapStateToProps =({users})=>{
return{
    users,

}
}

export default connect(mapStateToProps) (LogIn)
