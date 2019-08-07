import React from 'react';
import Square from '../square/square'


class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isXturn : true,
            squares: Array(9).fill(null),
        };
    }

    playerTurn () {
        return this.state.isXturn ? "X" : "O";
     }

    handleClick(i){
      const squares = this.state.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
        
      let tValue = this.playerTurn();
      squares[i] = tValue;
  
      this.setState({
          isXturn: !this.state.isXturn , 
          squares: squares,  
      });
        
    }


    renderSquare(i) {
      return <Square value={this.state.squares[i]} onClick={() => {this.handleClick(i)}}/>;
    }

    
  
    render() {
      let status = 'Next player: ' + this.playerTurn();
      
      if (calculateWinner(this.state.squares)) {
        status = " Winner is: " + calculateWinner(this.state.squares);
      }
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  export default Board;