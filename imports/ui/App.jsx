import React, { Component } from 'react';
 

export default class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            phone_number: "",
            section_num: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.continue_on = this.continue_on.bind(this);
        this.getSection = this.getSection.bind(this);
    }
  
  handleChange(event) {
    
  }

  continue_on() {

  }

  getSection() {

  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Call Your Grand Mother!</h1>
        </header>

        <div className="main">
            <div className="section">
              {this.getSection()}
            </div>
            <div className="continue">
              <button onClick={this.continue_on}> Continue </button>
            </div>
        </div>
      </div>
    );
  }
}