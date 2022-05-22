/**
 * @module Canvas
 */
import { Paper, makeStyles } from "@material-ui/core";
import { button, surface } from "../styles/colors-v3";

const useStyles = makeStyles(({ palette: { type } }) => ({
  root: {
    // When a MUI Contained Secondary button appears in this canvas,
    // its color will automatically change to reflect the YouVersion
    // V3 Design System colors.
    "& .MuiButton-containedSecondary": {
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
    },
    backgroundColor: surface[type].secondary
  }
}));

/**
 * Canvas Surface for V3 YouVersion Design System.
 *
 * This is a MUI Paper component with dynamic styling of the MUI Button secondary component.
 *
 * @param {object} props - The component's props object.
 * @param {React.ReactElement|string} props.children - Component to be rendered in the Canvas.
 *
 * @returns Canvas component.
 */
export function Canvas({ children, ...props }) {
  const classes = useStyles();
  return (
    <Paper {...props} classes={{ root: classes.root }}>
      {children}
    </Paper>
  );
}
