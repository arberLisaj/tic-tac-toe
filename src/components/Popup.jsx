import { Box, Button, Dialog, Typography } from "@mui/material";

export default function Popup({ state, handleClose, playerName }) {
  return (
    <Dialog onClose={handleClose} open={state}>
      <Box sx={{ padding: "30px 50px" }}>
        <Typography variant="h5" marginBottom="8px">
          Winner is Player {playerName}
        </Typography>
        <Button
          type="button"
          variant="outlined"
          color="secondary"
          aria-label="play again"
          sx={{ display: "block", margin: "auto" }}
          onClick={handleClose}
        >
          Play again
        </Button>
      </Box>
    </Dialog>
  );
}
