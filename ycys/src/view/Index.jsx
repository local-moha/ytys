import React, { Component } from 'react'
import Myrouter from '../components/Myrouter'
import axios from 'axios'
export default class Index extends Component {
    render() {
        return (
            <div>
                <Myrouter router={this.props.childrens}></Myrouter>
            </div>
        )
    }
}
