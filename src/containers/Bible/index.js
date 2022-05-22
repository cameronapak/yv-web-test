import React from "react";
import { Box, Fade, LinearProgress } from "@material-ui/core";

export function Bible() {
  const [hasLoaded, setHasLoaded] = React.useState(false);

  return (
    <>
      {!hasLoaded ? <LinearProgress /> : null}
      <Fade in={hasLoaded}>
        <Box
          clone
          height="calc(100vh + 24px)"
          marginTop={"-80px"}
          overflow="hidden"
          width="100%"
        >
          <iframe
            onLoad={() => setHasLoaded(true)}
            src="https://bible.com/bible"
            title="bible.com"
          />
        </Box>
      </Fade>
    </>
  );
}
