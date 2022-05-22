import { Box, Button, Paper, Typography, makeStyles } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { MomentCard } from "../../MomentCard";

const useStyles = makeStyles((theme) => ({}));

const NotificationDot = () => (
  <Box mr={0.5} borderRadius={4} bgcolor={"error.main"} height={8} width={8} />
);

const Story = ({ id, day, showDot }) => (
  <Box display="flex" height="100%" width="100%" flexDirection="column">
    <a
      href="https://bible.com/stories"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Box
        position="relative"
        flexGrow={1}
        style={{
          aspectRatio: "100 / 175",
          backgroundImage: `url("https://www.colorbook.io/imagecreator.php?width=200&height=100&random=${id}")`,
          backgroundSize: "cover"
        }}
        borderRadius={8}
        width="auto"
        height="100%"
      >
        <Box
          display="flex"
          borderRadius={99}
          padding={1}
          margin={0}
          color="common.white"
          bgcolor="action.active"
          position="absolute"
          bottom={8}
          left={8}
        >
          <PlayArrowIcon fontSize="medium" />
        </Box>
      </Box>
    </a>
    <Box alignItems="center" display="flex" component={Typography} pt={1}>
      {showDot ? <NotificationDot /> : null}
      {day}
    </Box>
  </Box>
);

export function Stories(props) {
  const classes = useStyles();

  return (
    <MomentCard title="Verse of the Day Stories" {...props}>
      <Box display="flex" gridGap={16} maxWidth={425} width="100%">
        <Story id={1} day="Today" showDot />
        <Story id={2} day="Yesterday" />
        <Story id={3} day="Friday" />
      </Box>
    </MomentCard>
  );
}
