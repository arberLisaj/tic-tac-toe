import { Box, Stack } from "@mui/material";

export default function ScoreBoard({ playerX, playerO }) {
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
        // textAlign="center"
        borderRight="1px solid gainsboro"
        sx={{ padding: "13px" }}
      >
        Player X ( {playerX} )
      </Box>
      <Box width="50%" sx={{ padding: "13px" }}>
        Player O ( {playerO} )
      </Box>
    </Stack>
  );
}
