import React, { Component } from 'react';


class TableProps extends Component {

  render() {
    return (
      <tr>

      <td>{this.props.trainer.id}
      </td>

      <td>
      {this.props.trainer.Trainer}
      </td>

      </tr>
    );
  }
}

export default TableProps;
