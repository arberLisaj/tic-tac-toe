import { Box, Stack, Typography } from "@mui/material";

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
        Player x ( {playerX} wins )
      </Box>
      <Box
        width="50%"
        textAlign="center"
        sx={{ backgroundColor: "#FFD1DC", padding: "13px" }}
      >
        Player o ( {playerO} wins)
      </Box>
    </Stack>
  );
};

export default ScoreBoard;
