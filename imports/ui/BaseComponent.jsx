import React, { Component } from 'react';
 
export default class BaseComponent extends Component {

    constructor(props) {
        super(props);
        this.willMoveOn = this.willMoveOn.bind(this);
    }

    willMoveOn(success, failed) {
        if(this.shouldMoveOn()) {
            success();
        }
        else {
            this.willNotMoveOn();
            if (failed) {
                failed();
            }
        }
    }

    shouldMoveOn () {
        return true;
    }

    willNotMoveOn() {

    }

    handleChange(event) {
        this.props.onChange(event);
    }
}