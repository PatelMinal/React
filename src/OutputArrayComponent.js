import React, { Component } from 'react';

class OutputArrayComponent extends Component {

  render() {
    //Loop through the array of data, convert it into an array of div elements.
    let outputData = this.props.data.map((element) => {
      return (
        <div key={element.Trainer}>
          <p><strong>{element.Trainer}</strong> - {element.myData}</p>

        </div>
      );
    });

    return (
      <div>
        {outputData}
      </div>
    );

  }
}
