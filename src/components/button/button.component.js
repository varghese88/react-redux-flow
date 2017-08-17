import React, { Component } from "react";

export class CustomButton extends Component{

    getClickBtnEvent(){
        return { type: 'BUTTON_CLICK'}
    }

    render(){
        return (
            <button onClick={()=>this.props.callbackFn(this.getClickBtnEvent())} className="btn btn-danger">{this.props.name}</button>
        );
    }
}