import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect,
    BrowserRouter as Router
} from 'react-router-dom'
import GuardRouter from './GuardRouter'
class Myrouter extends Component {
    constructor(porps){
        super(porps);
        this.state={}
    }
    render() {
        return (
            <Router forceRefresh={true}>
                <Switch>
                    {
                        this.props.router.map(v=>( 
                            <Route key={v.path} exact={v.exact} path={v.path} render={()=><GuardRouter {...v}></GuardRouter>}></Route>
                        ))
                    }
                    {/* <Redirect to={'/minsu/index.html'} from='/'></Redirect>
                    <Redirect to={'/error'} from='*'></Redirect> */}
                </Switch> 
           </Router> 
           
        );
    }
    componentWillMount(){
        console.log(111,this.props);
        
    }
}

export default Myrouter;
