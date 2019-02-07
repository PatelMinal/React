import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <form>
        <h1>{ this.props.data }</h1>
        <button onClick={ this.props.updateData }>
          Update
        </button>
      </form>
      );
  }
}

export default Child;
