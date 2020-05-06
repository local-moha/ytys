import React, { Component } from 'react';
import axios from 'axios';


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state={
            DistributionInfo:{},
            city_code:localStorage.city_code||1588581086488
        }
    }

   
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML = {{ __html: this.state.DistributionInfo.detail }} />
            </div>
        );
    }
    async componentDidMount(){
        // console.log(this.props.location.search);
        
        const data =await axios.get(`/minsu/distribution/index/detail${this.props.location.search}&_=${this.state.city_code}`)
        console.log(data.data.data);
        this.setState({
            DistributionInfo:data.data.data
        })
    }
}

export default Detail;