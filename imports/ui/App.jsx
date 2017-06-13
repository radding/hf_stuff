import React, { Component } from 'react';
import Phone from "./Phone.jsx";
import Code from "./Code.jsx";

export default class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            phone: "",
            section_num: 0,
            err:0,
            code: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.continue_on = this.continue_on.bind(this);
        this.getSection = this.getSection.bind(this);
        this.remindMe = this.remindMe.bind(this);
    }
  
  handleChange(name, value) {

    this.setState( {
      [name]: value
    }, () => {
      this.refs.continue.focus();
    });
  }

  continue_on(event) {
    this.refs.current.willMoveOn((code) => {
      this.setState({
        section_num: this.state.section_num+1,
        person_id: code
      });
    })
  }

  getSection() {
    /*switch(this.state.section_num) {
      case 0:
         return (
          <Phone 
            phone={this.state.phone}
            finished={this.handleChange}
            ref="current"
          />
        )
      case 1:
        return (<Code 
          pid={this.state.person_id}
            ref="current"
          
          />)
      case 2:
        return (
          <button onClick="remindMe"> Remind Me </button>
        )
      default:
        break;
    }*/
    return ( 
      <Phone 
        phone={this.state.phone}
        finished={this.handleChange}
        ref="current"
      />
  )
  }

  remindMe() {
    Meteor.call("remind", {pid: this.state.person_id}, (err, res) => {
       if (err) {
                alert(err);
            } else {
                console.log(res);
                if (res)
                    cb(this.props.pid);
                else
                alert("Wrong Code");
            }
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Call Your Grandmother!</h1>
        </header>

        <div className="main">
          <div className="content">
            <div className="section">
              {this.getSection()}
            </div>
            <div className="continue">
              <button onClick={this.continue_on} ref="continue"> Remind </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}