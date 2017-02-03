import React from 'react';

class AddMessageForm extends React.Component {
  constructor() {
    super();
    this.state = {
      isAppending : false
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    let now = new Date()
    let message = {
      title: this.refs.title.value, 
      desc: this.refs.desc.value, 
      time: now
    } 
    this.props.addMessage(message);
    this.state.isAppending = false
    this.setState({ isAppending : this.state.isAppending });  
  }
  handleClick () {
    this.state.isAppending = true
    this.setState({ isAppending : this.state.isAppending });  
  }
  render() {
    return (
      <div>
        {this.state.isAppending 
          ? <form ref="messageForm" onSubmit={this.handleSubmit.bind(this)} >
              <button type='Submit'>Add message</button>
              <input type='text' ref='title' placeholder="Title" required/>    
              <textarea type='text' ref='desc' placeholder="Desc" required/>
            </form>
          : <button onClick={this.handleClick.bind(this)}>Add message</button>}
      </div>
    )  
  }
}

export default AddMessageForm