import React, { Component } from 'react';
import BaseComponent from "./BaseComponent.jsx";

export default class Phone extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            phone_number: this.props.phone_number,
            err: false,
            err_msg: "",
            focused: "area_code",
            area_code: undefined,
            first_3: undefined,
            four: undefined,
            ndx: 0
        }

        this.range = ["area_code", "first_3", "four"];

        this.changing = this.changing.bind(this);
        this.focusNext = this.focusNext.bind(this);

    }

    componentDidMount() {
        this.focusNext();
    }

    render() {
        return ( 
           <div> 
                (<input 
                    name="area_code"
                    value={this.state.area_code}
                    onChange={this.changing(3)}
                    placeholder="Area Code"
                    ref="area_code"
                    onFocus={() => this.setState({ndx:0})}
                />) - 
                <input 
                    name="first_3"
                    value={this.state.first_3}
                    onChange={this.changing(3)}
                    placeholder="First Three numbers"
                    ref="first_3"
                    onFocus={() => this.setState({ndx:1})}

                /> -
                <input 
                    name="four"
                    value={this.state.four}
                    onChange={this.changing(4)}
                    placeholder="Last Four Numbers"
                    ref="four"
                /> 
            </div>
        );
    }

    shouldMoveOn() {
        
    }

    focusNext() {
        this.refs[this.range[this.state.ndx]].focus();
    }

    changing(num) {
        return (event) => {
            var name = event.target.name;
            var value = event.target.value;
            if (!/^[0-9]*$/.test(value)) {
                return;
            }
            if(value.length >= num && this.state.ndx == this.range.length-1) {
                this.props.finished("phone", this.state.area_code+this.state.first_3+this.state.four);
            }
            this.setState({
                [name] : value
            }, () => {
                if(value.length >= num) {
                    var nxt = this.state.ndx + 1;
                    if (nxt >= this.range.length) {
                        return;
                    }
                    this.setState({
                        ndx: nxt
                    }, () => {
                        this.focusNext()
                    });
                }
            });
        }
    }
}
