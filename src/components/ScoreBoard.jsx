import { Box, Stack } from "@mui/material";

const ScoreBoard = ({ playerX, playerO }) => {
  return (
    <Stack
      direction="flex"
      justifyContent="space-between"
      marginBottom="10px"
      borderRadius="6px"
      overflow="hidden"
      border="1px solid gainsboro"
    >
      <Box
        width="50%"
        textAlign="center"
        sx={{ backgroundColor: "#e1f1fd", padding: "13px" }}
      >
        Player X ( {playerX} )
      </Box>
      <Box
        width="50%"
        textAlign="center"
        sx={{ backgroundColor: "#FFD1DC", padding: "13px" }}
      >
        Player O ( {playerO} )
      </Box>
    </Stack>
  );
};

export default ScoreBoard;
