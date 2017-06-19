import React from "react";
import PropTypes from 'prop-types';
import "./item-list.scss";
import {CustomButton} from "../button/button.component"

export class Item extends React.Component{

    getButtonEventPayload(event){
        let payLoad = {};
        switch (event.type) {
            case "BUTTON_CLICK":
                payLoad = {
                    type: 'REMOVE_BUTTON_CLICK',
                    payload:this.props.item
                }
                break;
        
            default:
                break;
        }
        return payLoad;
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
                    <CustomButton name = {'Remove'} callbackFn = {(event)=>this.props.callbackFn(this.getButtonEventPayload(event))} />
                </div>
            </div>
                
        );
    }
}

Item.PropTypes = {
    callbackFn:PropTypes.func,
    item:PropTypes.object.isRequired
};