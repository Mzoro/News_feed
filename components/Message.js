import React from 'react';

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      currentId : -1
    }
  }
  handleSubmit (event) {
    event.preventDefault();
    let now = new Date()
    let message = {
      index: this.props.index, 
      title: this.refs.title.value, 
      desc: this.refs.desc.value, 
      time: now
    } 
    this.props.updateMessage(message)
    this.state.currentId = -1
    this.setState({ currentId : this.state.currentId });  
  }
  handleClick(){
    this.state.currentId = this.props.index
    this.setState({ currentId : this.state.currentId });  
  }
  render () {
    const { message } = this.props;
    const now = message.time;
    const optionsTime = { hour: 'numeric', minute: 'numeric' };
    const optionsDate = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedTime = now.toLocaleString("ru", optionsTime)+", "+now.toLocaleString("ru", optionsDate)
    return (
      <div>
         {this.state.currentId != this.props.index 
          ? <div>
              <h5>{message.title}</h5>
              <p>{message.desc}</p>
              <p>{formattedTime}</p>
              <button onClick={this.props.deleteMessage.bind(null, this.props.index)}>delete message</button>
              <button onClick={this.handleClick.bind(this)}>update</button>
            </div>
          : <div>
              <form ref="messageForm" onSubmit={this.handleSubmit.bind(this)} >
                <button type='Submit'>ok</button>
                <input type='text' ref='title' defaultValue={message.title} required/>    
                <textarea type='text' ref='desc' defaultValue={message.desc} required/>
              </form>
            </div>}
      </div>
    )
  }
}

export default Message