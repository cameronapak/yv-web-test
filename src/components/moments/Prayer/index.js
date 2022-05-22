import {
  Badge,
  Box,
  Button,
  Paper,
  Typography,
  makeStyles
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { MomentCard } from "../../MomentCard";

const useStyles = makeStyles((theme) => ({}));

export function Prayer(props) {
  const classes = useStyles();

  return (
    <MomentCard title="Prayer" {...props}>
      {/* Guided Prayer */}
      <Paper
        justifyContent="center"
        alignItens="center"
        display="flex"
        bgcolor="grey.200"
        borderRadius={8}
        gridGap={16}
        className="surface-secondary"
        component={Box}
        p={4}
        elevation={0}
      >
        <a
          href="https://bible.com/prayer"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Box
            borderRadius={8}
            height={173}
            width={100}
            style={{
              backgroundImage:
                'url("https://www.colorbook.io/imagecreator.php?width=200&height=100")',
              backgroundSize: "cover"
            }}
          />
        </a>
        <Box alignSelf="center">
          <Typography color="textPrimary" gutterBottom variant="caption">
            Daily Guided Prayer
          </Typography>
          <Typography color="textPrimary" gutterBottom variant="body1">
            Start a conversation with God
          </Typography>
          <Button variant="contained">Pray Now</Button>
        </Box>
      </Paper>
      {/* Prayer Actions */}
      <Box mt={2} display="flex" flexGrow={1} justifyContent="space-between">
        <Button startIcon={<AddCircleOutlineIcon />}>Add Prayer</Button>
        <Button
          startIcon={
            <Box borderRadius={4} bgcolor={"error.main"} height={8} width={8} />
          }
          endIcon={<ArrowForwardIosIcon />}
        >
          Prayer List
        </Button>
      </Box>
    </MomentCard>
  );
}
