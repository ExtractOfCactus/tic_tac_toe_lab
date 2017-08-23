import React from 'react';

class TableComponent extends React.Component {

  constructor(props) {
    super(props);
    this.squareClick = this.squareClick.bind(this);
  }

  squareClick(evt) {
    this.props.cellClicked(evt.target.id)
  }

  render() {

    //loops


    return (
      <table>
        <tbody>
          <tr>
            <td className="square" id="0" onClick={this.squareClick}>{this.props.grid[0]}</td>
            <td className="square" id="1"  onClick={this.squareClick}>{this.props.grid[1]}</td>
            <td className="square" id="2"  onClick={this.squareClick}>{this.props.grid[2]}</td>
          </tr>
          <tr>
            <td className="square" id="3" onClick={this.squareClick}>{this.props.grid[3]}</td>
            <td className="square" id="4" onClick={this.squareClick}>{this.props.grid[4]}</td>
            <td className="square" id="5" onClick={this.squareClick}>{this.props.grid[5]}</td>
          </tr>
          <tr>
            <td className="square" id="6" onClick={this.squareClick}>{this.props.grid[6]}</td>
            <td className="square" id="7" onClick={this.squareClick}>{this.props.grid[7]}</td>
            <td className="square" id="8" onClick={this.squareClick}>{this.props.grid[8]}</td>
          </tr>
        </tbody>
      </table>
      )
  }

}

export default TableComponent;