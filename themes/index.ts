import { ThemeOptions } from "@mui/material"
import darkPalette from "./palettes/dark"
import lightPalette from "./palettes/light"

function getDesignTokents(mode: "light" | "dark"): ThemeOptions {
  return {
    palette: mode === "dark" ? darkPalette : lightPalette,
    components: {
      MuiTabs: {
        styleOverrides: {
          flexContainer: {
            minHeight: "100%"
          },
          // indicator: {
          //   height: "100%",
          //   color: "primary",
          //   backgroundColor: "transparent",
          //   border: "2px ridge #ffc107",
          //   pointerEvents: "none"
          // }
        }
      },
      // MuiTab: {
      //   styleOverrides: {
      //     root: {
      //       transition: "border .2s",
      //       "&.Mui-selected": {
      //         border: "2px ridge"
      //       }
      //     }
      //   }
      // }
    }
  }
}

export default getDesignTokents