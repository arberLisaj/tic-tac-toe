import { Button, Grid } from "@mui/material";

export default function Square({ value, onSquareClick }) {
  const styles = {
    height: "100%",
    minHeight: "120px",
    minWidth: "120px",
    width: "100%",
    fontSize: "20px",
  };

  return (
    <Grid item sm={4}>
      <Button
        variant="outlined"
        sx={styles}
        className="square"
        onClick={onSquareClick}
      >
        {value}
      </Button>
    </Grid>
  );
}
