import React from "react";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getPosts , removePost} from '../../actions/post-action'
import {ItemList} from '../../components/item-list/item-list';

class PostListPage extends React.Component{
    
    componentWillMount(){
        this.props.getPosts();
    }

    callbackFn(action){
        switch (action.type) {
            case 'REMOVE_BUTTON_ACTION':
                this.props.removePost(action.payload);
                break;
            default:
                break;
        }
    }

    render(){

        return (
            <div className="container">
                <h1><b>New Posts</b></h1>
                <ItemList posts={this.props.posts} callbackFn={(action)=>this.callbackFn(action)} />
            </div>
        );
    }
}

const mapStateToProps = (state) =>(
    { posts:state.postPageData.posts }
);
const mapDispatchToProps = (dispatch)=>(
    bindActionCreators({getPosts,removePost},dispatch)
);

export default connect(mapStateToProps,mapDispatchToProps)(PostListPage);