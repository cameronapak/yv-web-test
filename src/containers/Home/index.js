import { Box, Button, Grow } from "@material-ui/core";
import { VerseOfTheDay } from "../../components/moments/VerseOfTheDay";
import { MyPlans } from "../../components/moments/MyPlans";
import { Prayer } from "../../components/moments/Prayer";
import { Stories } from "../../components/moments/Stories";
import { TopBar } from "../../components/TopBar";

export function Home({ toggleDarkMode }) {
  const homeModuleLayout = [VerseOfTheDay, MyPlans, Prayer, Stories];

  return (
    <Box
      alignItems="center"
      paddingTop={`${50 + 16}px`}
      display="flex"
      flexDirection="column"
      gridGap={16}
    >
      <TopBar toggleDarkMode={toggleDarkMode} />
      {homeModuleLayout.map((Module, index) => {
        return (
          <Grow in={true} timeout={(index + 1) * 500}>
            <Module />
          </Grow>
        );
      })}
      <Box mt={2} mb={2}>
        <Button variant="outlined">Rearrange These Sections </Button>
      </Box>
    </Box>
  );
}
