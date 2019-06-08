import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchusers: PropTypes.func.isRequired
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
      </div>
    );
  }
}

export default Search;
