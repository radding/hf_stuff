import React, { Component } from 'react';
 

export default class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            phone_number: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
  
  handleChange(event) {
    
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Call Your Grand Mother Sam!</h1>
        </header>

        <div className="main">
            <input 
              name="phone_number" 
              placeholder="phone number" 
              value={this.state.username} 
              onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}