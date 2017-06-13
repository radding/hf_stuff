import React, { Component } from 'react';
import Phone from "./Phone.jsx";

export default class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            phone: "",
            section_num: 0,
            err:0
        }
        this.handleChange = this.handleChange.bind(this);
        this.continue_on = this.continue_on.bind(this);
        this.getSection = this.getSection.bind(this);
    }
  
  handleChange(name, value) {

    this.setState( {
      [name]: value
    }, () => {
      this.refs.continue.focus();
    });
  }

  continue_on(event) {
    this.refs.current.willMoveOn(() => {
      this.setState({
        section_num: this.state.section_num+1
      });
    })
  }

  getSection() {
    switch(this.state.section_num) {
      case 0:
         return (
          <Phone 
            phone_number={this.state.phone_number}
            finished={this.handleChange}
            ref="current"
          />
        )
      default:
        break;
    }
   

  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Call Your Grandmother!</h1>
        </header>

        <div className="main">
            <div className="section">
              {this.getSection()}
            </div>
            <div className="continue">
              <button onClick={this.continue_on} ref="continue"> Continue </button>
            </div>
        </div>
      </div>
    );
  }
}