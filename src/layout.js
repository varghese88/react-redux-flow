import React from "react";
import { Router, Route,browserHistory} from "react-router"
import PostListPage  from './pages/post-list/post-list-page';

export class AppLayout extends React.Component{

    render(){
        return (
            <Router history={browserHistory} >
                <Route  path="/" component={PostListPage} />
            </Router>
        );
    }
}
