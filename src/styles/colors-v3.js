/**
 * @module v3Colors - From YouVersion 's V3 Design System
 */

/**
 * @readonly
 * @constant {string}
 */
export const white = "#FFFFFF";

/**
 * Gray colors.Can be imported as 'gray' or 'grey'.
 *
 * @readonly
 * @enum {string}
 */
export const gray = Object.freeze({
  5: "#F8F9F9",
  10: "#EDEFEF",
  15: "#D0D2D2",
  20: "#9EA1A2",
  25: "#777A7B",
  30: "#4F5354",
  35: "#3D4243",
  40: "#2B3031",
  45: "#1F2122",
  50: "#121212"
});
// Just in case someone wants to use the other spelling of "gray".
export const grey = gray;

/**
 * Teal colors.
 *
 * @readonly
 * @enum {string}
 */
export const teal = Object.freeze({
  10: "#E6F2F3",
  20: "#80BDC4",
  30: "#007B89",
  40: "#004A52",
  50: "#002529"
});

/**
 * Blue colors.
 *
 * @readonly
 * @enum {string}
 */
export const blue = Object.freeze({
  10: "#E7F2FD",
  20: "#9EBCE1",
  30: "#3D79C2",
  "30DM": "#3D79C2",
  40: "#29537A",
  50: "#1C2A3B"
});

/**
 * Purple colors.
 *
 * @readonly
 * @constant {object}
 */
export const purple = Object.freeze({
  10: "#F2EEF3",
  20: "#BCA8C5",
  30: "#79518A",
  40: "#483550",
  50: "#241829"
});

/**
 * Magenta colors.
 *
 * @readonly
 * @enum {string}
 */
export const magenta = Object.freeze({
  10: "#F5EAEE",
  20: "#CC96AA",
  30: "#992C55",
  40: "#5C1A33",
  50: "#2E0D19"
});

/**
 * Orange colors.
 *
 * @readonly
 * @enum {string}
 */
export const orange = Object.freeze({
  10: "#FAECEB",
  20: "#E59F9A",
  30: "#CA3E35",
  "30DM": "#F23B22",
  40: "#7A2629",
  50: "#3D1310"
});

/**
 * Yellow colors.
 *
 * @readonly
 * @enum {string}
 */
export const yellow = Object.freeze({
  10: "#FEF5EB",
  20: "#F8CB94",
  30: "#F09728",
  40: "#975C11",
  50: "#4C2D08"
});

/**
 * Green colors.
 *
 * @readonly
 * @enum {string}
 */
export const green = Object.freeze({
  10: "#EEF6F0",
  20: "#ABD0B6",
  30: "#57A16C",
  "30DM": "#4AAE67",
  40: "#346148",
  50: "#1A3026"
});

/**
 * YouVersion red accent color.
 *
 * @readonly
 * @constant {string}
 */
export const yvRed = "#FF3D4D";

/**
 * YouVersion red surface color.
 *
 * @readonly
 * @constant {string}
 */
export const warmNeutral = "#F6EFEE";

/**
 * Utility colors.
 *
 * @deprecated - Deprecated since 3.2.2. `import { utilityColors } from '@youversion/react'` instead.
 *
 * @readonly
 * @enum {string}
 */
export const utility = Object.freeze(
  (() => {
    if (process.env !== "production") {
      // eslint-disable-next-line no-console
      console.warn(
        "`utility` is deprecated since 3.2.2. `import { utilityColors } from '@youversion/react'` instead."
      );
    }

    return {
      alert: orange[30],
      info: blue[30],
      success: green[30],
      // Warning does not exist in the design system, but I added this for web.
      warning: yellow[30]
    };
  })()
);

/**
 * Utility colors.
 *
 * @readonly
 * @enum {string}
 */
export const utilityColors = Object.freeze({
  // "These new utility colors will be used for text only, and only when they are used on a black
  // (or Gray 50) background." - YV Design Ops.
  dark: {
    alert: orange["30DM"],
    info: blue["30DM"],
    success: green["30DM"],
    warning: yellow[30]
  },
  light: {
    alert: orange[30],
    info: blue[30],
    success: green[30],
    warning: yellow[30]
  }
});

/**
 * Surface. Also known as a canvas.
 *
 * @readonly
 * @constant {object}
 */
export const surface = Object.freeze({
  dark: {
    default: gray[50],
    secondary: gray[45]
  },
  light: {
    default: white,
    secondary: gray[10]
  }
});

/**
 * Button colors.
 *
 * @readonly
 * @constant {object}
 */
export const button = Object.freeze({
  dark: {
    accent: "#F04C59",
    contrastText: "white",
    default: gray[40],
    primary: gray[10],
    // Secondary button color is only allowed on secondary surfaces.
    secondary: gray[35]
  },
  light: {
    accent: yvRed,
    contrastText: "white",
    default: gray[10],
    primary: gray[40],
    // Secondary button color is only allowed on secondary surfaces.
    secondary: gray[15]
  }
});

/**
 * Border colors.
 *
 * @readonly
 * @enum {string}
 */
export const border = Object.freeze({
  dark: gray[30],
  light: gray[15]
});

/**
 * Text colors.
 *
 * @readonly
 * @constant {object}
 */
export const text = Object.freeze({
  dark: {
    accent: "#F04C59",
    muted: gray[20],
    primary: white,
    secondary: gray[20]
  },
  light: {
    accent: yvRed,
    muted: gray[25],
    primary: gray[50],
    secondary: gray[25]
  }
});
