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
    
        if (!this.state.squares[i]) {
            const squares = this.state.squares.slice();
            let tValue = this.playerTurn();
            squares[i] = tValue;
        
            this.setState({
                isXturn: !this.state.isXturn , 
                squares: squares,  
            });
        }
    }


    renderSquare(i) {
      return <Square value={this.state.squares[i]} onClick={() => {this.handleClick(i)}}/>;
    }

    
  
    render() {
      const status = 'Next player: ';
  
      return (
        <div>
          <div className="status">{status + (this.playerTurn())}</div>
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

  export default Board;