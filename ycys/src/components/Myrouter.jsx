import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
// import GuardRouter from './GuardRouter'
class Myrouter extends Component {
    constructor(porps){
        super(porps);
        this.state={}
    }
    render() {
        return (
           <Switch>
               {
                   this.props.router.map(v=>( 
                       <Route key={v.path} exact={v.exact} path={v.path} render={()=><GuardRouter {...v}></GuardRouter>} ></Route>
                   ))
               }
                <Redirect to={'/error'} from='*'></Redirect>
           </Switch>   
        );
    }
    componentWillMount(){
        console.log(this.props.router);
        
    }
}

export default Myrouter;
