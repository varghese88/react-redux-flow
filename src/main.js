import React, { Component } from "react";
import {NavBar} from "./components/navigationbar/navbar.component"

export class Main extends Component{
    render(){
        return (
            <div className="container">
               <NavBar/>
               <div className="container">
                    {this.props.children}
               </div>
            </div>
        );
    }
}