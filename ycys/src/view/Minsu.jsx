import React, { Component } from 'react'
import Myrouter from '../components/Myrouter'
export default class Minsu extends Component {
    render() {
        return (
            <div>    
                <Myrouter router={this.props.childrens} forceRefresh={true}></Myrouter>     
            </div>
        )
        console.log(333,this.props)
    }
}