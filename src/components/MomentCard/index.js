import {
  Box,
  IconButton,
  Paper,
  Typography,
  makeStyles
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    maxWidth: theme.breakpoints.values.sm,
    borderRadius: 32,
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`
  },
  disabled: {
    opacity: "30%",
    pointerEvents: "none"
  },
  title: {
    textTransform: "uppercase"
  }
}));

export function MomentCard({ children, disabled, title, share, ...props }) {
  const classes = useStyles();

  return (
    <Paper
      classes={{
        root: [classes.card, disabled ? classes.disabled : ""].join(" ")
      }}
      component={Box}
      elevation={0}
      {...props}
    >
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        flexGrow={1}
      >
        <Typography
          className={classes.title}
          color="textPrimary"
          variant="caption"
        >
          {title}
        </Typography>
        <Box display="flex" gridGap={8}>
          {share ? (
            <IconButton size="small" aria-label="delete">
              <ShareIcon />
            </IconButton>
          ) : null}
          <IconButton size="small" aria-label="delete">
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Box>
      <Box py={2}>{children}</Box>
    </Paper>
  );
}
