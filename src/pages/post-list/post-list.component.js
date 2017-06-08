import React from "react";
import PropTypes from 'prop-types';
import {ItemList} from '../../components/item-list/item-list.component';

export class PostListPage extends React.Component{
    
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
                <ItemList items={this.props.posts} callbackFn={(action)=>this.callbackFn(action)} />
            </div>
        );
    }
}
PostListPage.PropTypes = {
    callbackFn:PropTypes.func,
    removePost:PropTypes.func,
    getPosts:PropTypes.func,
    posts:PropTypes.array.isRequired,

};