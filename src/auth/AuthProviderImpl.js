import React, { Component } from "react";
import Axios from "axios";
import { AuthContext } from "./AuthContext";
import { authUrl } from "../data/Urls";

export class AuthProviderImpl extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false,
            webToken: null
        }
    }

    authenticate = (credentials) => {
        return Axios.post(authUrl, credentials).then(res => {
            if(res.data.success === true){
                this.setState({
                    isAuthenticated: true,
                    webToken: res.data.token
                })
                return true;
            }
            else{
                throw new Error("Invalid Credentials");
            }
        })
    }

    signout = () => {
        this.setState({
            isAuthenticated: false,
            webToken: null
        })
    }

    render = () => 
        <AuthContext.Provider 
            value={{...this.state, authenticate: this.authenticate, signout: this.signout}}>
                {this.props.children}
        </AuthContext.Provider>
}