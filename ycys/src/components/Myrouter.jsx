import React, { Component } from 'react';

import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import GuardRouter from './GuardRouter'
import Person from "../view/Person"
class Myrouter extends Component {
    constructor(porps) {
        super(porps);
        // this.state = {
        //     num:1
        // }
    }
    render() {
        return (
            <div>   
            {/* Myrouter */}
            <Switch>
                {/* {
                    <Route path="/person" component={Person}></Route>
                  
                } */}
               {  this.props.router.map(v => (
                        <Route key={v.path} exact={v.exact} path={v.path}  render={() => <GuardRouter {...v}></GuardRouter>}></Route>
                    ))}
                {/* <Redirect to={'/error'} from='*'></Redirect> */}
            </Switch>
            </div>
         
        );
    }
    componentWillMount() {
            // this.setState(state=>{
            //     num : ++state.num
            // },()=>{
            //     console.log("Myrouter,this.props.router",this.props.router,this.state.num);

            // })
            // console.log("Myrouter,this.props.router",this.props.router)
        
    }
}

export default Myrouter;
