import React from "react";
import PropTypes from 'prop-types';
import {CustomButton } from '../../components/button/button.component'

export class PostListDetailsPage extends React.Component{
    
    callbackFn(event){
        switch (event.type) {
            case 'DETAILS_BUTTON_CLICK':
                this.props.detailsPost();
                break;
            default:
                break;
        }
    }

    render(){

        return (
            <div className="container">
                <h1><b>Posts Details</b></h1>
                <CustomButton name = {'details'} callbackFn = {()=>this.callbackFn({type: 'DETAILS_BUTTON_CLICK'})} />
            </div>
        );
    }
}
PostListDetailsPage.PropTypes = {
    callbackFn:PropTypes.func,
    detailsPost:PropTypes.func,
};