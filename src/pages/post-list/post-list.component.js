import React from "react";
import { browserHistory } from 'react-router'
import PropTypes from 'prop-types';
import {ItemList} from '../../components/item-list/item-list.component';
import {CustomButton } from '../../components/button/button.component'
export class PostListPage extends React.Component{
    
    componentWillMount(){
        this.props.getPosts();
    }

    callbackFn(event){
        switch (event.type) {
            case 'REMOVE_BUTTON_CLICK':
                this.props.removePost(event.payload);
                break;
             case 'NEXT_PAGE':
                browserHistory.push('/details');
                break;
            default:
                break;
        }
    }

    render(){

        return (
            <div className="container">
                <CustomButton name = {'Next Page'} callbackFn = {()=>this.callbackFn({type:'NEXT_PAGE'})} />
                <h1><b>New Posts</b></h1>
                <ItemList items={this.props.posts} callbackFn={(event)=>this.callbackFn(event)} />
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