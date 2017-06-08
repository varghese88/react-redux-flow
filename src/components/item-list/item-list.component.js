import React from "react";
import {Item} from './item.component';
import "./item-list.scss";

export class ItemList extends React.Component{
    render(){
        const list = this.props.posts.map((post,index)=>{
            return (
                <Item key={index} post={post} callbackFn={(action)=>this.props.callbackFn(action)} />
            );
        }); 
        return (
            <div className="flex-container">
                <div className="flex-row">
                    <div className="flex-column title">
                        <b>Title</b>
                    </div>
                    <div className="flex-column description">
                        <b>Description</b>
                    </div>
                    <div className="flex-column">
                    </div>
                </div>
                {list}
            </div>
        );
    }
}