import React from 'react';

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing : -1
    }
  }
  completeUpdate (event) {
    event.preventDefault();
    let now = new Date()
    this.props.updateMessage(this.props.index, this.refs.title.value, this.refs.desc.value, now)
    this.state.isEditing = -1
    this.setState({ isEditing : this.state.isEditing });  
  }
  startUpdate(){
    this.state.isEditing = this.props.index
    this.setState({ isEditing : this.state.isEditing });  
  }
  render () {
    const { message } = this.props;
    const now = message.time;
    const optionsTime = { hour: 'numeric', minute: 'numeric' };
    const optionsDate = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedTime = now.toLocaleString("ru", optionsTime)+", "+now.toLocaleString("ru", optionsDate)
    return (
      <div>
         {this.state.isEditing != this.props.index 
          ? <div>
              <h5>{message.title}</h5>
              <p>{message.desc}</p>
              <p>{formattedTime}</p>
              <button onClick={this.props.deleteMessage.bind(null, this.props.index)}>delete message</button>
              <button onClick={this.startUpdate.bind(this)}>update</button>
            </div>
          : <div>
              <form ref="messageForm" onSubmit={this.completeUpdate.bind(this)} >
                <button type='Submit'>ok</button>
                <input type='text' ref='title' defaultValue={message.title}/>    
                <textarea type='text' ref='desc' defaultValue={message.desc}/>
              </form>
            </div>}
      </div>
    )
  }
}

export default Message