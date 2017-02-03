import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

import Message from './Message';
import AddMessageForm from './AddMessageForm';
import { sortByTime } from '../utils/utils.js'

class App extends Component {
  render() {
    const { messages, updateMessage, addMessage, deleteMessage } = this.props
    return (
      <div>  
        {sortByTime(messages)
          .map((message, key) => <Message key={key} index={key} message={message} 
                                          deleteMessage={deleteMessage} 
                                          updateMessage={updateMessage}/>)}

        <AddMessageForm addMessage={addMessage} />
      </div>    
    )  
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
