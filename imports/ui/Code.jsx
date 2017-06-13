import React, { Component } from 'react';
import BaseComponent from "./BaseComponent.jsx";
import { Meteor } from 'meteor/meteor';


export default class Code extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            code: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.willMoveOn = this.willMoveOn.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            code: event.target.value
        });
    }

    willMoveOn(cb) {
        Meteor.call("verifyCode", {code: this.state.code, pid: this.props.pid}, (err, res) => {
            if (err) {
                alert(err);
            } else {
                console.log(res);
                if (res)
                    cb(this.props.pid);
                else
                alert("Wrong Code");
            }
        })
    }

    render() {
        return (
            <div>
                <input
                    placeholder="Enter Your Code" 
                    value={this.state.code}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}