import { Button, Grid } from "@mui/material";

function Square({ value, onSquareClick }) {
  return (
    <Grid item xs={4} sm={4}>
      <Button
        type="button"
        aria-label="square"
        variant="outlined"
        sx={{
          minHeight: "120px",
          minWidth: "120px",
          width: "100%",
          fontSize: "20px",
        }}
        color="secondary"
        onClick={onSquareClick}
      >
        {value}
      </Button>
    </Grid>
  );
}

export default Square;
