import React from 'react';

class SearchPanel extends React.Component {
  handleInput(event) {
    this.props.setSearchedInfo(event.target.value);
  }
  render() {
    return (
      <div>
        <span>Search</span>
        <input type='search' placeholder="by Title and Time" onChange={this.handleInput.bind(this)}/>    
      </div>
    )  
  }
}

export default SearchPanel