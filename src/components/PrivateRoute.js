import React from 'react'
import {connect} from 'react-redux'
import { Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({ authedUser, component: Component, ...rest }) => (

    <Route {...rest} render={(props) => (
        authedUser!==""
            ? <Component {...props} />
            : <Redirect  to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
        )} />

)

const mapStateToProps= ({authedUser})=>{
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(PrivateRoute)

