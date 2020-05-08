import React, { Component } from 'react'
import Myrouter from '../components/Myrouter'
export default class Index extends Component {
    render() {
        return (
            <Myrouter router={this.props.childrens}></Myrouter>
        )
    }
}
