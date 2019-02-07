
class Output extends Component {

  render() {
    //Loop through the array of data, convert it into an array of div elements.
    let outputData = this.props.data.map((element) => {
      return (
        <div key={element.id}>
          <p><strong>{element.id}</strong> - {element.myData}</p>
          <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
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
