import { Grid } from "@mui/material";
import calculateWinner from "../utils/calculateWinner";
import Square from "./Square";

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  return (
    <Grid container className="board" spacing="5px" width="100%">
      {squares.map((s, index) => (
        <Square
          key={index}
          value={squares[index]}
          onSquareClick={() => handleClick(index)}
        />
      ))}
    </Grid>
  );
}

export default Board;
