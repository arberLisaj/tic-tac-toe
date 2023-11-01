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
    <Grid item xs={4} sm={4}>
      <Button
        type="button"
        variant="outlined"
        sx={squareStyles}
        color="secondary"
        onClick={onSquareClick}
      >
        {value}
      </Button>
    </Grid>
  );
}
