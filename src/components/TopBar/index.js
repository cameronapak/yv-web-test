import {
  AppBar,
  Avatar,
  Box,
  Container,
  Tabs,
  Tab,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    alignSelf: "center",
    marginRight: theme.spacing(1)
  },
  fitWidth: {
    width: "content-fit"
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    top: 0,
    borderBottom: `1px solid ${theme.palette.divider}`,
    left: 0,
    position: "fixed",
    width: "100%"
  },
  titleCase: {
    textTransform: "none"
  }
}));

export function TopBar(props) {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.root}
      position="static"
      color="transparent"
      elevation={0}
    >
      <Container maxWidth="md">
        <Tabs
          className={[classes.fitWidth].join(" ")}
          indicatorColor="primary"
          value={0}
          onChange={() => {}}
          aria-label="simple tabs example"
        >
          <Tab className={classes.titleCase} label="Today" />
          <Tab className={classes.titleCase} label="Community" />
          <Box flexGrow={1} />
          <Avatar className={classes.avatar}>CP</Avatar>
        </Tabs>
      </Container>
    </AppBar>
  );
}
