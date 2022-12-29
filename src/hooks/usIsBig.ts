import { useMediaQuery, useTheme } from "@mui/material";

const useIsBig = () => {
  const theme = useTheme();
  const big = useMediaQuery(`(min-width: ${theme.breakpoints.values.sm}px)`);

  return big;
}

export default useIsBig