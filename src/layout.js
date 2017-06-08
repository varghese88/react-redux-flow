import React from "react";
import { Router, Route,browserHistory} from "react-router"
import PostListPageContainer  from './pages/post-list/post-list.container';

export class AppLayout extends React.Component{

    render(){
        return (
            <Router history={browserHistory} >
                <Route  path="/" component={PostListPageContainer} />
            </Router>
        );
    }
}
