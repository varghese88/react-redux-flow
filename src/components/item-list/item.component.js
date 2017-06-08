import React from "react";
import "./item-list.scss";

export class Item extends React.Component{

    getRemoveBtnAction(){
        return {
            type: 'REMOVE_BUTTON_ACTION',
            payload:this.props.post
        }
    }

    render(){
        
        return (
                
            <div className="flex-row">
                <div className="flex-column title">
                    {this.props.post.title}
                </div>
                <div className="flex-column description">
                    {this.props.post.body}
                </div>
                <div className="flex-column">
                    <button onClick={()=>this.props.callbackFn(this.getRemoveBtnAction())} className="btn btn-danger">remove</button>
                </div>
            </div>
                
        );
    }
}