import React, { Component } from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import PostListPageContainer  from './pages/post-list/post-list.container';
import PostListDetailsPageContainer  from './pages/post-details/post-details.container';
import { Main } from './pages/main';
import { NavBar} from './components/navigationbar/navbar.component'

export class AppLayout extends Component{

    render(){
        return (
            <Router history={browserHistory} >
                <Route path="/" component={Main}>
                    <IndexRoute component={PostListPageContainer}/>
                    <Route  path="main" component={PostListPageContainer} />
                    <Route  path="details" component={PostListDetailsPageContainer} />
                </Route>
                {/* <Route  path="login" component={Login}/> */}
            </Router>
        );
    }
}
