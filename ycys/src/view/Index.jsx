import React, { Component } from 'react'
import Myrouter from '../components/Myrouter'
export default class Index extends Component {
    componentDidMount(){
        // console.log("this.props.childrens",this.props)
    }
    render() {
        return (
            <div>
           
                <Myrouter router={this.props.childrens}></Myrouter>
                
            </div>
        )
    }
}
