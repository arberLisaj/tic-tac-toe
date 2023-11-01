import { Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import calculateWinner from "./calculateWinner";
import Board from "./components/Board";
import Popup from "./components/Popup";
import ScoreBoard from "./components/ScoreBoard";

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [gamesWonByX, setGamesWonByX] = useState(0);
  const [gamesWonByO, setGamesWonByO] = useState(0);
  const [popUpState, setPopUpState] = useState(false);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(x) {
    setCurrentMove(x);
  }

  const moves = history.map((squares, move) => {
    if (move > 0) {
      return (
        <Grid item key={move}>
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            aria-label="go to given position"
            onClick={() => jumpTo(move)}
          >
            {"move #" + move}
          </Button>
        </Grid>
      );
    }
  });

  const winner = calculateWinner(currentSquares);
  let status;
  if (winner) {
    status = "Game Over!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  useEffect(() => {
    if (winner == "X") setGamesWonByX((prevGames) => prevGames + 1);
    if (winner == "O") setGamesWonByO((prevGames) => prevGames + 1);
    if (winner) setPopUpState(true);
  }, [winner]);

  function resetGame() {
    jumpTo(0);
    setHistory([Array(9).fill(null)]);
  }
  return (
    <>
      <ScoreBoard playerX={gamesWonByX} playerO={gamesWonByO} />
      <Container
        maxWidth="md"
        sx={{
          border: "1px solid gainsboro",
          padding: "20px",
          borderRadius: "6px",
        }}
      >
        <Grid container maxWidth="md" spacing="10px">
          <Grid item md={6}>
            <Board
              xIsNext={xIsNext}
              squares={currentSquares}
              onPlay={handlePlay}
            />
          </Grid>
          <Grid item md={6} sx={{ width: "100%" }}>
            <Grid container spacing="5px" width="100%">
              <Grid item width="100%" md={12}>
                <Button
                  aria-label="restart game"
                  type="button"
                  variant="outlined"
                  color="error"
                  sx={{ width: "100%" }}
                  size="large"
                  onClick={() => resetGame()}
                >
                  Restart Game
                </Button>
              </Grid>
              {moves}
            </Grid>
          </Grid>
        </Grid>
        <Popup
          playerName={winner}
          state={popUpState}
          handleClose={() => {
            setPopUpState(false);
            resetGame();
          }}
        />
      </Container>
    </>
  );
}
