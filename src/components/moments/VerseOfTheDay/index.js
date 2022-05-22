import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { MomentCard } from "../../MomentCard";

const useStyles = makeStyles((theme) => ({}));

export function VerseOfTheDay(props) {
  const classes = useStyles();

  return (
    <MomentCard
      // className={[classes.card].join(" ")}
      title="Verse of the Day"
      share={true}
      {...props}
    >
      <Box display="flex">
        <Box
          height="auto"
          bgcolor="text.secondary"
          width="8px"
          borderRadius={8}
          mr={1.5}
        />
        <Box>
          <Typography color="textPrimary" gutterBottom variant="h2">
            So let us come boldly to the throne of our gracious God. There we
            will receive his mercy, and we will find grace to help us when we
            need it most.
          </Typography>
          <Typography color="textPrimary" variant="caption">
            Hebrews 4:16 NLT
          </Typography>
        </Box>
      </Box>
    </MomentCard>
  );
}
