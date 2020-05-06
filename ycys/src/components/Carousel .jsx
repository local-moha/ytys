import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class Carousel extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                {
                //  this.props.image_detail.map(v=>{
                //      return (
                //         <img src={v} alt="" draggable={false} />
                //      )
                //  })
                }
            </div>
        );
    }
    componentDidMount(){
        console.log(this);
        console.log(this.props);
    }
}



export default withRouter(Carousel);