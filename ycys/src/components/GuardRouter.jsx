import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class GuardRouter extends Component {
     constructor(props){
         super(props);
         this.state={}
     }
    render() {
        return (
            <this.props.component {...this.props}/>
        )
    }
    //路由守卫
    componentWillMount(){
        if(this.props.isAuthorization){
            if(!localStorage.userName){
                this.props.history.push('/login')
            }
        }
    }
}
export default withRouter(GuardRouter)