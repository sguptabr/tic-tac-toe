import "./App.css";
import { useState } from "react";

//Creates each square on the Board
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

//Main Board
function Board() {
  //To keep track of palyers X and O
  const [xIsNext, setXIsNext] = useState(true);

  //To keep track of values inside each square
  const [squares, setSquares] = useState(Array(9).fill(null));

  //Function to update squares
  const handleClick = (i) => {
    const updatedSquares = [...squares];
    //Checks weather the square to be clicked is empty or is already a winner
    if (squares[i] || checkWinner(squares)) {
      return;
    }
    
    if (xIsNext) {
      updatedSquares[i] = "X";
    } else {
      updatedSquares[i] = "O";
    }
    setSquares(updatedSquares);
    //To switch between users X and O
    setXIsNext(!xIsNext);
  };

  const winner = checkWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="App">
      <p>{status}</p>
      <div>
        <div className="board-row">
          <Square
            value={squares[0]}
            onSquareClick={() => {
              handleClick(0);
            }}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => {
              handleClick(1);
            }}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => {
              handleClick(2);
            }}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[3]}
            onSquareClick={() => {
              handleClick(3);
            }}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => {
              handleClick(4);
            }}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => {
              handleClick(5);
            }}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[6]}
            onSquareClick={() => {
              handleClick(6);
            }}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => {
              handleClick(7);
            }}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => {
              handleClick(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}


//Function to check winner return null if no winner found 
const checkWinner = (squares) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    const [x, y, z] = winningCombinations[i];
    if (squares[x] && squares[x] === squares[y] && squares[y] === squares[z]) {
      return squares[x];
    }
  }
  return null;
};

export default Board;
