"use client"; // This is a client component 👈🏽

import { green, purple } from "@mui/material/colors";
import Todos from "./pages/Todos/Todos";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header/Header";

export default function Home() {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <Todos />
    </ThemeProvider>
  );
}
