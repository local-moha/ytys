import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class GuardRouter extends Component {
     constructor(props){
         super(props);
         this.state={}
     }
    render() {
        return (
          
            <div>
            {/* GuardRouter */}
                  <this.props.component {...this.props}/>
               
            </div>
        )
    }
    // componentDidMount(){
    //     // console.log("GuardRouter,this.props",this.props)
    // }
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