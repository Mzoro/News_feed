import React from 'react';
import Message from './Message';
import AddMessageForm from './AddMessageForm';

class Wrapper extends React.Component {
  compareTime(obj_1, obj_2) {
    return obj_1.time > obj_2.time ? -1 : 1;
  }
  sortByTime(arr) {
    return arr.sort(this.compareTime)
  }
  render() {
    const { messages, updateMessage, addMessage, deleteMessage } = this.props
    return (
      <div>  
        {this.sortByTime(messages)
          .map((message, key) => <Message key={key} index={key} message={message} 
                                          deleteMessage={deleteMessage} 
                                          updateMessage={updateMessage}/>)}

        <AddMessageForm addMessage={addMessage} />
      </div>    
    )  
  }
}

export default Wrapper
