import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Initial data...'
    }
    this.updateState = (e) => {
      e.preventDefault();
      this.setState({
        data: e.target.value
      });
    }
    this.clearInput = (e) => {
      e.preventDefault();
      this.setState({
        data: ""
      });
      this.textInput.focus();
    }
  }
  render() {
    return (
      <form>
        <input type="text" value={ this.state.data } onChange={ this.updateState } ref={ (input) => this.textInput = input } />
        <h4>{ this.state.data }</h4>
        <button onClick={ this.clearInput }>
          CLEAR
        </button>
      </form>
      );
  }
}
export default Button;
