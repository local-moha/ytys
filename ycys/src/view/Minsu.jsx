import React, { Component } from 'react';

import MyRouter from '../components/Myrouter'
class Minsu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                 <MyRouter router={this.props.childrens}></MyRouter>
            </div>
        );
    }
    componentDidMount() {
        console.log(this.props.childrens);
        
    }
}


export default Minsu;