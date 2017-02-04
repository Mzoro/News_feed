import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

import Message from './Message';
import AddMessageForm from './AddMessageForm';
import SearchPanel from './SearchPanel';

import { sortByTime } from '../utils/utils.js'

class App extends Component {
  render() {
    const { messages, searchedInfo, updateMessage, addMessage, deleteMessage, setSearchedInfo } = this.props
    return (
      <div>
        <SearchPanel setSearchedInfo={setSearchedInfo}/>
        {sortByTime(messages)
          .map((message, key) => <Message key={key} index={key} message={message}
                                          searchedInfo={searchedInfo} 
                                          deleteMessage={deleteMessage} 
                                          updateMessage={updateMessage}/>)}

        <AddMessageForm addMessage={addMessage} />
      </div>    
    )  
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    searchedInfo: state.searchedInfo

  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
