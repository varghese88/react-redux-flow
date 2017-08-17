import React, { Component } from "react";
import PropTypes from 'prop-types';
import {Item} from './item.component';
import "./item-list.scss";

export class ItemList extends Component{
    render(){
        const list = this.props.items.map((item,index)=>{
            return (
                <Item key={index} item={item} callbackFn={(event)=>this.props.callbackFn(event)} />
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
ItemList.PropTypes = {
    callbackFn:PropTypes.func,
    items:PropTypes.array.isRequired
}