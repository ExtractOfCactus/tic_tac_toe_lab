import React from 'react';

import TableComponent from '../components/TableComponent.jsx';
import InfoboxComponent from '../components/InfoboxComponent.jsx';

class GameContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: ["","","","","","","","",""],
      currentPlayer: "X",
      currentImage: "../../build/images/X/profX.jpg",
      gameOver: false,
      winner: ""
    }
  }

  checkWinner() {
    const players = ["X", "O"];
    const rows = [0, 3, 6];
    const columns = [0, 1, 2];
    for (var player of players) {
      for (var row of rows) {
        if (this.state.grid[row] === player) {
          if (this.state.grid[row + 1] === player && this.state.grid[row + 2] === player) {
            this.setState({gameOver: true, winner: player});
          }
        }
      }
      for (var column of columns) {
        if (this.state.grid[column] === player) {
          if (this.state.grid[column + 3] === player && this.state.grid[column + 6] === player) {
            this.setState({gameOver: true, winner: player});
          }
        }
      }
      if (this.state.grid[4] === player) {
        if((this.state.grid[0] === player && this.state.grid[8] === player) || this.state.grid[2] === player && this.state.grid[6] === player) {
          this.setState({gameOver: true, winner: player});
        }
      }
    }
  }

  cellSelected(selectedCell) {
    if (this.state.grid[selectedCell] || this.state.gameOver) return;

    this.state.grid[selectedCell] = this.state.currentPlayer;
    
    if(this.state.currentPlayer === "X") {
      this.setState({grid: this.state.grid, currentPlayer: "O", currentImage: "../../build/images/O/fireO.jpg"});      
    }else {
      this.setState({grid: this.state.grid, currentPlayer: "X", currentImage: "../../build/images/X/profX.jpg"});          
    }

    this.checkWinner(); 
  }

  render() {
    return (
      <div id="game">
      <TableComponent cellClicked={this.cellSelected.bind(this)}  grid={this.state.grid}  />
      <InfoboxComponent player={this.state.currentPlayer} image={this.state.currentImage} gameOver = {this.state.gameOver} winner={this.state.winner} />
      </div>
    )
  }

}

export default GameContainer;