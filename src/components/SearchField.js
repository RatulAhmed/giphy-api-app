import React, { Component } from 'react';

class SearchField extends Component {
  state = {
    searchText: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.query.value);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Search" ref={(input) => this.query = input} />
      </form>
    )
  }
};
export default SearchField
