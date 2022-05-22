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

// Hook to toggle dark mode.
const useDarkMode = () => {
  const DARK_MODE_KEY = "prefers-dark-mode";

  function getDarkModePreference() {
    const darkModeLSEnabled = localStorage.getItem(DARK_MODE_KEY);
    const darkModeDeviceEnabled =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (darkModeLSEnabled !== undefined) {
      return darkModeLSEnabled === "true"; // cookie returns back text
    }

    return darkModeDeviceEnabled;
  }

  const [isDarkMode, setIsDarkMode] = React.useState(() =>
    getDarkModePreference()
  );

  function setDarkModeValue(value) {
    localStorage.setItem(DARK_MODE_KEY, value);
    setIsDarkMode(value);
  }

  function toggleDarkMode() {
    setDarkModeValue(!isDarkMode);
  }

  return {
    isDarkMode: isDarkMode,
    toggleDarkMode
  };
};

export default function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [currentPage, setCurrentPage] = React.useState(0);
  const theme = createMuiTheme(getV3ThemeObject({ isDarkMode }));

  function onPageChange(value) {
    console.log(value);
    setCurrentPage(value);
  }

  let page = null;
  if (currentPage === 0) {
    page = <Home toggleDarkMode={toggleDarkMode} />;
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
