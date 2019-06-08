import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  onChange = e => {
    // [] brackets for key, e.target.name is 'text'
    this.setState({ [e.target.name]: e.target.value });
  };

  // If not an arrow function, must bind(this) in render. Arrow functions are already binded to this
  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text); // Sending prop up to App.js using passed in function
    this.setState({ text: '' });
  };

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button onClick={clearUsers} className='btn btn-light btn-block'>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
