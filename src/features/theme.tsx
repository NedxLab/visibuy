import { createTheme } from "@mui/material/styles";

const CustomTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#cdd6e1",
          paper: "#c8e2ff",
        },
        primary: {
          main: "#1976d2",
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: "#141414eb",
          paper: "#141414eb",
        },
        primary: {
          main: "#1976d2",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});
export default CustomTheme;
