import { Box, Button, Typography, makeStyles } from "@material-ui/core";
import { MomentCard } from "../../MomentCard";

const useStyles = makeStyles((theme) => ({}));

export function PlanSquare({ hasBeenRead = false, day = "", id, title = "" }) {
  return (
    <Box>
      <Box
        display="inline-block"
        borderRadius={16}
        height="150px"
        width="150px"
        bgcolor="grey.400"
        style={{
          backgroundImage: `url("https://placekitten.com/600/600?random=${id}")`,
          backgroundSize: "cover"
        }}
        flexShrink="0"
      />
      <Typography variant="caption">{day || "Day 1 of 5"}</Typography>
      <Typography gutterBottom>{title || "Cat Plan Title"}</Typography>
      <Button disabled={hasBeenRead} variant="contained">
        {hasBeenRead ? "Completed" : "Read Today"}
      </Button>
    </Box>
  );
}

export function MyPlans(props) {
  const classes = useStyles();

  return (
    <MomentCard title="My Plans" {...props}>
      <Box flexDirection="row" gridGap={16} display="flex" overflow="auto">
        <PlanSquare
          day="Day 1 of 5"
          id={0}
          title="Ruthless Elimination of Purry"
        />
        <PlanSquare day="Day 278 of 365" id={1} title="Bible in One Cat Year" />
        <PlanSquare hasBeenRead day="Day 1 of 5" id={2} />
        <PlanSquare hasBeenRead day="Day 1 of 5" id={3} />
      </Box>
    </MomentCard>
  );
}
