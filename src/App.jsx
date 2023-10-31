import { useEffect, useState } from "react";
import Board from "./components/Board";
import calculateWinner from "./calculateWinner";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ScoreBoard from "./components/ScoreBoard";

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const [gamesWonByX, setGamesWonByX] = useState(0);
  const [gamesWonByO, setGamesWonByO] = useState(0);
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
          <Button variant="contained" onClick={() => jumpTo(move)}>
            {"move #" + move}
          </Button>
        </Grid>
      );
    }
  });

  const winner = calculateWinner(currentSquares);
  let status;
  if (winner) {
    status = "Winner is Player " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  useEffect(() => {
    if (winner == "X") setGamesWonByX((prevGames) => prevGames + 1);
    if (winner == "O") setGamesWonByO((prevGames) => prevGames + 1);
  }, [winner]);

  function resetGame() {
    jumpTo(0);
    setHistory([Array(9).fill(null)]);
  }

  return (
    <>
      {!winner && <ScoreBoard playerX={gamesWonByX} playerO={gamesWonByO} />}
      <Container
        maxWidth="md"
        sx={{
          border: "1px solid gainsboro",
          padding: "20px",
          borderRadius: "6px",
        }}
      >
        <Typography
          variant="h5"
          paddingBottom="10px"
          textAlign={winner ? "center" : ""}
        >
          {status}
        </Typography>
        {!winner ? (
          // FIXME: small screen devices grid be wildin
          <Grid container maxWidth="md" spacing={1}>
            <Grid item md={6} sm={12}>
              <Board
                xIsNext={xIsNext}
                squares={currentSquares}
                onPlay={handlePlay}
              />
            </Grid>
            <Grid item md={6} sm={12}>
              <Grid container spacing={1}>
                <Grid item sm={12} md={12}>
                  <Button
                    variant="contained"
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
        ) : (
          <Button
            variant="contained"
            sx={{ display: "block", margin: "auto" }}
            onClick={() => resetGame()}
          >
            Play again
          </Button>
        )}
      </Container>
    </>
  );
}
