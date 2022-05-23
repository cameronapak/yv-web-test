import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grow,
  IconButton,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  makeStyles
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { PlanSquare } from "../../components/moments/MyPlans";

const useStyles = makeStyles({
  bigPlan: {
    aspectRatio: "350 / 200",
    backgroundColor: "grey",
    backgroundImage:
      'url("https://imageproxy.youversionapi.com/https://s3.amazonaws.com/yvplans/16982/720x405.jpg")',
    backgroundSize: "cover"
  },
  container: {
    alignItems: "center",
    flexDirection: "column",
    display: "flex"
  },
  divider: {
    width: "100%"
  },
  listItem: {
    listStyleType: "none",
    width: "100%"
  }
});

const plansArray = [
  <PlanSquare day="Day 1 of 5" id={0} title="Ruthless Elimination of Purry" />,
  <PlanSquare day="Day 278 of 365" id={1} title="Bible in One Cat Year" />,
  <PlanSquare hasBeenRead day="Day 1 of 5" id={2} />,
  <PlanSquare hasBeenRead day="Day 1 of 5" id={3} />
];

export function Plans() {
  const classes = useStyles();

  return (
    <Box pt={4}>
      <Container className={classes.container} maxWidth="sm">
        <Grow in>
          <Box width="100%">
            <Box
              borderRadius={16}
              className={classes.bigPlan}
              width="100%"
              mb={1}
            />
            <Typography color="textSecondary" variant="caption" gutterBottom>
              Day 1 of 3
            </Typography>
            <Typography color="textPrimary" variant="body1" gutterBottom>
              The Call To Celebrate
            </Typography>
            <Button color="primary" variant="contained">
              Read Today
            </Button>
          </Box>
        </Grow>

        {/* Row of Plans */}
        <Box
          display="flex"
          flexDirection="row"
          gridGap={16}
          mt={4}
          overflow="auto"
          width="100%"
        >
          {plansArray.map((planComponent, index) => {
            return (
              <Grow in={true} timeout={(index + 1) * 500}>
                <div>{planComponent}</div>
              </Grow>
            );
          })}
        </Box>

        <Box mt={4} width="100%">
          <Divider className={classes.divider} />
          <ListItem
            ContainerProps={{ className: classes.listItem }}
            className={classes.listItem}
            button
          >
            <ListItemText primary="Completed Plans" />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="Open Page">
                <ChevronRightIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem
            ContainerProps={{ className: classes.listItem }}
            className={classes.listItem}
            button
          >
            <ListItemText primary="Saved Plans" />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="Open Page">
                <ChevronRightIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Box>
      </Container>
    </Box>
  );
}
