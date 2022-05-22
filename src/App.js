import React from "react";
import {
  Box,
  CssBaseline,
  Paper,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core";
import { NavBar } from "./components/NavBar";
import { Home } from "./containers/Home";
import { Bible } from "./containers/Bible";
import { getV3ThemeObject } from "./styles";

export default function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(0);
  const theme = createMuiTheme(getV3ThemeObject({ isDarkMode }));

  function onPageChange(value) {
    console.log(value);
    setCurrentPage(value);
  }

  let page = null;
  if (currentPage === 0) {
    page = <Home />;
  } else {
    page = <Bible />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper
        component={Box}
        className="surface-secondary"
        bgcolor="grey.200"
        paddingBottom={`${50 + 16}px`}
        minHeight="100vh"
      >
        {page}
        <NavBar currentPage={currentPage} onPageChange={onPageChange} />
      </Paper>
    </ThemeProvider>
  );
}
