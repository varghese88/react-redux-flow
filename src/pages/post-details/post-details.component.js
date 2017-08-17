import React, { Component } from "react";
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router'
import {CustomButton } from '../../components/button/button.component'

export class PostListDetailsPage extends Component{
    
    callbackFn(event){
        switch (event.type) {
            case 'BACK_BUTTON_CLICK':
                browserHistory.push('/main');
                break;
            default:
                break;
        }
    }

    render(){

        return (
            <div className="container">
                <h1><b>Posts Details</b></h1>
                <CustomButton name = {'back'} callbackFn = {()=>this.callbackFn({type: 'BACK_BUTTON_CLICK'})} />
            </div>
        );
    }
}
PostListDetailsPage.PropTypes = {
    callbackFn:PropTypes.func,
    detailsPost:PropTypes.func,
};