import React, { Component } from 'react';
import TableProps from './TableProps.js'

class Table extends Component {

constructor() {
    super();

    this.state = {

      trainers: [
        {
          id:"1",
          Trainer: "Joe Bloggs"
        },
        {
          id:"2",
            Trainer: "Jane Bloggs"
        },
        {
          id:"3",
          Trainer: "Jack Bloggs"
        },
        {
          id:"4",
            Trainer: "Jim Bloggs"
        },
        {
          id:"5",
            Trainer: "Jackie Bloggs"
        }
      ]
  }
}

  render() {
    return (
      <div>
      <div name = "table">
<table width="800" align="center" class="table table-striped">

  <tr>
    <th>id</th>
    <th>Trainer</th>
  </tr>

  {
    this.state.trainers.map((trainer) => (<TableProps key = {trainer.id.toString()} trainer={trainer} />
  ))
}
</table>
</div>
</div>

    );
   }
  }
  export default Table;
