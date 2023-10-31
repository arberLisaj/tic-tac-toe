import { Button, Grid, makeStyles } from "@mui/material";

export default function Square({ value, onSquareClick }) {
  const squareStyles = {
    minHeight: "120px",
    minWidth: "120px",
    width: "100%",
    fontSize: "20px",
  };

  makeStyles;
  return (
    <Grid item sm={4}>
      <Button
        variant="outlined"
        sx={squareStyles}
        className="square"
        onClick={onSquareClick}
      >
        {value}
      </Button>
    </Grid>
  );
}
