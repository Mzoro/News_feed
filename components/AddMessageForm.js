import React from 'react';

class AddMessageForm extends React.Component {
  constructor() {
    super();
    this.state = {
      isAppending : false
    }
  }
  createMessage(event) {
    event.preventDefault();
    let now = new Date()
    this.props.addMessage(this.refs.title.value, this.refs.desc.value, now);
    this.state.isAppending = false
    this.setState({ isAppending : this.state.isAppending });  
  }
  startAdd () {
    this.state.isAppending = true
    this.setState({ isAppending : this.state.isAppending });  
  }
  render() {
    return (
      <div>
        {this.state.isAppending 
          ? <form ref="messageForm" onSubmit={this.createMessage.bind(this)} >
              <button type='Submit'>Add message</button>
              <input type='text' ref='title' placeholder="Title"/>    
              <textarea type='text' ref='desc' placeholder="Desc"/>
            </form>
          : <button onClick={this.startAdd.bind(this)}>Add message</button>}
      </div>
    )  
  }
}

export default AddMessageForm