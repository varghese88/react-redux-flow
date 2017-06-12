import React from "react";
import PropTypes from 'prop-types';
import "./item-list.scss";

export class Item extends React.Component{

    getRemoveBtnEventPayload(){
        return {
            type: 'REMOVE_BUTTON_CLICK',
            payload:this.props.item
        }
    }

    render(){
        
        return (
                
            <div className="flex-row">
                <div className="flex-column title">
                    {this.props.item.title}
                </div>
                <div className="flex-column description">
                    {this.props.item.body}
                </div>
                <div className="flex-column">
                    <button onClick={()=>this.props.callbackFn(this.getRemoveBtnEventPayload())} className="btn btn-danger">remove</button>
                </div>
            </div>
                
        );
    }
}

Item.PropTypes = {
    callbackFn:PropTypes.func,
    item:PropTypes.object.isRequired
};