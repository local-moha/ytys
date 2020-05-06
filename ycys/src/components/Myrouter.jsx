import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import GuardRouter from './GuardRouter'
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
                {/* <Redirect to={'/minsu/index.html'} from='/'></Redirect>
                <Redirect to={'/error'} from='*'></Redirect> */}
           </Switch>   
           
        );
    }
    componentWillMount(){
        console.log(111,this.props);
        
    }
}

export default Myrouter;
