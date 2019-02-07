import React, { Component } from 'react';

class Table2 extends Component {
constructor() {
  super();

  this.state = {
    table: [
      {
        id:1,
        Person: "Joe Bloggs"
      },
      {
        id:2,
        Person: "Jane Bloggs"
      },
      {
        id:3,
        Person: "Jack Bloggs"
      },
      {
        id:4,
        Person: "Jim Bloggs"
      },
      {
        id:5,
        Person: "Jackie Bloggs"
      },
]
}

      render() {
        return (
          <div>
          <div>
      <tr>
        <th>ID</th>
        <th>TrainerName</th>
      </tr>
    {

    this.state.trainers.map((Trianer) => (<TableProps key = {Trainer.ID.toString()} Trainer={Trainer} />
  ))
  }

</div>
</div>
