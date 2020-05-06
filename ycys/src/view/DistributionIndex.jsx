import React, { Component } from 'react';
import MyRouter from "../components/Myrouter";


class DistributionIndex extends Component {
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
}



export default DistributionIndex;