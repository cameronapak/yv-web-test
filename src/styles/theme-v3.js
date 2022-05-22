/**
 * @module v3Theme
 */
import { createTheme } from "@material-ui/core";
import {
  blue,
  border,
  button,
  gray,
  surface,
  text,
  utilityColors
} from "./colors-v3";

const screenTypes = {
  dark: "dark",
  light: "light"
};

/**
 * Gets a Material-UI (MUI) theme object optimized for the YouVersion v3 design system.
 * Provide this theme object to a MUI ThemeProvider.
 *
 * @param {object} params - Function's params object.
 * @param {boolean} [params.isDarkMode] - Determines if the app is in light or dark mode.
 *
 * @returns {object} The YV MUI theme object.
 *
 * @example
 *
 * import {
 *   ThemeProvider
 *   createTheme,
 * } from '@material-ui/core'
 * import { getV3ThemeObject } from '@youversion/react'.
 *
 * const isDarkMode = true
 *
 * // It's important to create the theme outside of any component that could re-render
 * // due to performance hits.
 * // See https://material-ui.com/customization/theming/#a-note-on-performance.
 * const theme = createTheme(getV3ThemeObject({ isDarkMode }))
 * function App() {
 *   return (
 *    <ThemeProvider theme={theme}>
 *      <h1>Hello, World!</h1>
 *    </ThemeProvider>
 *   )
 * }
 */
export function getV3ThemeObject({ isDarkMode = false }) {
  const type = isDarkMode ? screenTypes.dark : screenTypes.light;

  return {
    overrides: {
      MuiButton: {
        contained: {
          "&.btn-yv-red": {
            "&:active": {
              backgroundColor: button[type].accent,
              filter: "brightness(0.9)"
            },
            "&:hover": {
              backgroundColor: button[type].accent
            },
            backgroundColor: button[type].accent,
            color: "white"
          },
          "&:active": {
            boxShadow: "none"
          },
          "&:focus": {
            boxShadow: "none"
          },
          "&:hover": {
            boxShadow: "none"
          },
          borderRadius: 99,
          boxShadow: "none"
        },
        outlined: {
          borderRadius: 99
        },
        outlinedPrimary: {
          borderColor: border[type],
          color: text[type].primary
        },
        // v3 buttons do not have uppercase text.
        root: {
          textTransform: "none"
        },
        text: {
          "&.btn-yv-red": {
            color: button[type].accent
          },
          borderRadius: 99
        }
      },
      MuiCheckbox: {
        colorPrimary: {
          "&$checked": {
            color: utilityColors[type].info
          }
        },
        colorSecondary: {
          "&$checked": {
            color: utilityColors[type].info
          }
        },
        root: {
          "&$checked": {
            color: utilityColors[type].info
          }
        }
      },
      MuiChip: {
        outlinedPrimary: {
          borderColor: border[type],
          color: text[type].primary
        }
      },
      MuiPaper: {
        root: {
          "&.surface-secondary": {
            backgroundColor: surface[type].secondary
          },
          "&.surface-secondary .MuiButton-containedSecondary": {
            "&:active": {
              backgroundColor: button[type].secondary
            },
            "&:focus": {
              backgroundColor: button[type].secondary
            },
            "&:hover": {
              backgroundColor: button[type].secondary
            },
            backgroundColor: button[type].secondary
          }
        }
      },
      MuiRadio: {
        colorPrimary: {
          "&$checked": {
            color: utilityColors[type].info
          }
        },
        colorSecondary: {
          "&$checked": {
            color: utilityColors[type].info
          }
        }
      },
      MuiSwitch: {
        colorPrimary: {
          "& + $track": {
            backgroundColor: gray[20]
          },
          "&$checked": {
            color: blue[30]
          },
          "&$checked + $track": {
            backgroundColor: blue[30]
          },
          color: isDarkMode ? gray[30] : null
        }
      },
      MuiTypography: {
        caption: {
          color: text[type].muted
        },
        // Our H1 becomes the size of Material-UI's H4. Used for Page Headings.
        h1: {
          fontSize: "2.125rem",
          fontWeight: "bold",
          letterSpacing: "0.00735em",
          lineHeight: 1.235
        },
        // Our H2 becomes the size of Material-UI's H5. Used for Section Headings.
        h2: {
          fontSize: "1.5rem",
          fontWeight: "bold",
          letterSpacing: "0em",
          lineHeight: 1.334
        },
        // Our H3 becomes (almost) the size of Material-UI's H6. Used for Section Sub-Headings.
        h3: {
          fontSize: "1.10rem", // The original fontSize for H6 is 1.25rem.
          fontWeight: "bold",
          letterSpacing: "0.0075em",
          lineHeight: 1.6
        },
        subtitle1: {
          color: text[type].muted
        }
      }
    },
    palette: {
      alert: {
        main: utilityColors[type].alert
      },
      background: {
        default: surface[type].default
      },
      info: {
        main: utilityColors[type].info
      },
      primary: {
        main: button[type].primary
      },
      secondary: {
        contrastText: button[type].primary,
        main: button[type].default
      },
      success: {
        main: utilityColors[type].success
      },
      text: {
        primary: text[type].primary,
        secondary: text[type].secondary
      },
      tonalOffset: 0.05,
      type,
      warning: {
        main: utilityColors[type].warning
      }
    }
  };
}

/**
 * Creates the v3 Design System Material-UI theme.
 *
 * @param {('dark'|'light')} [mode] - The color mode. Defaults to 'light'.
 * @throws {Error} - Throws an error if the mode passed is not supported.
 *
 * @returns {object} Material-UI's theme object.
 *
 * @example
 *
 * import { ThemeProvider } from '@material-ui/core'
 * import { createV3Theme } from '@youversion/react'.
 *
 * const isDarkMode = true
 *
 * // It's important to create the theme outside of any component that could re-render
 * // due to performance hits.
 * // See https://material-ui.com/customization/theming/#a-note-on-performance.
 * const theme = createV3Theme(isDarkMode ? 'dark' : 'light')
 *
 * function App() {
 *   return (
 *    <ThemeProvider theme={theme}>
 *      <h1>Hello, World!</h1>
 *    </ThemeProvider>
 *   )
 * }
 */
export function createV3Theme(mode = "light") {
  const modes = ["dark", "light"];
  if (!modes.includes(mode)) {
    throw new Error(`${mode} mode is not supported.`);
  }

  return createTheme(
    getV3ThemeObject({
      isDarkMode: mode === "dark"
    })
  );
}
