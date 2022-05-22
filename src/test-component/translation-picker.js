// TODO - this requires an update for Web Tools @youversion/react to have elevation for Paper.

import React from "react";
import { Autocomplete } from "@material-ui/lab";
import {
  Badge,
  Box,
  Chip,
  Divider,
  Fade,
  SvgIcon,
  Paper,
  TextField,
  Tooltip,
  Typography,
  makeStyles
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckIcon from "@material-ui/icons/Check";
import AddIcon from "@material-ui/icons/Add";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import EditIcon from "@material-ui/icons/Edit";
import LanguageIcon from "@material-ui/icons/Language";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import { surface } from "../styles/colors-v3";

const PLAN_STATUSES = {
  live: {
    status: "live",
    readable: "Live"
  },
  draft: {
    status: "draft",
    readable: "Draft"
  },
  "in-review": {
    status: "in-review",
    readable: "In Review"
  }
};

// TODO - figure the sizing out... feels weird.
function LinkIcon() {
  return (
    <SvgIcon color="primary" fontSize="small" viewBox="0 0 24 24">
      <path d="M21.4 7.50005C22.2 8.30005 22.2 9.60005 21.4 10.3001L18.6 13.1001L10.8 5.30005L13.6 2.50005C14.4 1.70005 15.7 1.70005 16.4 2.50005L18.2 4.30005L21.2 1.30005L22.6 2.70005L19.6 5.70005L21.4 7.50005ZM15.6 13.3001L14.2 11.9001L11.4 14.7001L9.3 12.6001L12.1 9.80005L10.7 8.40005L7.9 11.2001L6.4 9.80005L3.59999 12.6001C2.79999 13.4001 2.79999 14.7001 3.59999 15.4001L5.39999 17.2001L1.39999 21.2001L2.79999 22.6001L6.8 18.6001L8.6 20.4001C9.4 21.2001 10.7 21.2001 11.4 20.4001L14.2 17.6001L12.8 16.2001L15.6 13.3001Z" />
    </SvgIcon>
  );
}

function TranslationMenuActions({ sortAlphabetically = false }) {
  function handleButtonClick(event) {
    console.log("clicked", event);
  }

  return (
    <Box pt={2} pb={1} px={1}>
      <Fade in={!sortAlphabetically}>
        <Box
          gridGap={8}
          alignItems="center"
          // Added this to remove the space, but still allow it to animate properly.
          display={sortAlphabetically ? "none" : "flex"}
        >
          <Chip
            onClick={handleButtonClick}
            icon={<AddIcon />}
            size="small"
            label="New"
            color="primary"
          />
          <Chip
            onClick={handleButtonClick}
            icon={<LinkIcon />}
            size="small"
            label="Link"
            color="secondary"
          />
          <Divider orientation="vertical" flexItem />
          <Chip
            onClick={handleButtonClick}
            icon={<SortByAlphaIcon />}
            size="small"
            label="Sort"
            color="primary"
            variant="outlined"
          />
        </Box>
      </Fade>
      <Fade in={sortAlphabetically}>
        {/* Added the display prop to remove the space, but still allow it to animate properly. */}
        <Box display={!sortAlphabetically ? "none" : "flex"}>
          <Chip
            icon={<CancelIcon />}
            size="small"
            label="New"
            color="primary"
          />
        </Box>
      </Fade>
    </Box>
  );
}

function TranslationIcon({ status }) {
  let icon = null;
  if (status === PLAN_STATUSES.live.status) {
    icon = <CheckIcon fontSize="small" />;
  }

  if (status === PLAN_STATUSES.draft.status) {
    icon = <EditIcon fontSize="small" />;
  }

  if (status === PLAN_STATUSES["in-review"].status) {
    icon = <AccessTimeIcon fontSize="small" />;
  }

  return icon ? (
    <Tooltip title={PLAN_STATUSES[status].readable}>{icon}</Tooltip>
  ) : null;
}

function TranslationOption({ language, locale, status, readableStatus }) {
  return (
    <Box display="flex" alignItems="center" py={0.5}>
      <Box display="flex" alignItems="center" mr={1}>
        <TranslationIcon status={status} />
      </Box>
      <Typography color="textPrimary" variant="body1">
        {language}
      </Typography>
    </Box>
  );
}

const planTranslations = [
  {
    id: 0,
    language: "English",
    locale: "en",
    status: PLAN_STATUSES.live.status,
    readableStatus: PLAN_STATUSES.live.readable
  },
  {
    id: 1,
    language: "Spanish",
    locale: "es",
    status: PLAN_STATUSES["in-review"].status,
    readableStatus: PLAN_STATUSES["in-review"].readable
  },
  {
    id: 2,
    language: "Korean",
    locale: "ko",
    status: PLAN_STATUSES.draft.status,
    readableStatus: PLAN_STATUSES.draft.readable
  },
  {
    id: 3,
    language: "Dutch",
    locale: "de",
    status: PLAN_STATUSES.draft.status,
    readableStatus: PLAN_STATUSES.draft.readable
  }
];

const useStyles = makeStyles((theme) => ({
  autocomplete: {
    maxWidth: 220
  },
  comboBox: {
    borderRadius: 99
  },
  comboBoxEndAdornment: {
    paddingRight: theme.spacing(1)
  }
}));

function PaperWrapperComponent({ children }) {
  // TODO - There's a hard thing where I want to get TranslationMenuActions to work and not
  // close the popper... this is possible, but requires digging and thinking...

  return (
    <Paper>
      <TranslationMenuActions />
      {children}
    </Paper>
  );
}

function TranslationComboBox({ initialValue = null, translations = [] }) {
  const [inputValue, setInputValue] = React.useState(initialValue);
  const classes = useStyles();

  return (
    <Autocomplete
      PaperComponent={PaperWrapperComponent}
      className={classes.autocomplete}
      classes={{
        endAdornment: classes.comboBoxEndAdornment
      }}
      options={translations}
      groupBy={(translation) => translation.status}
      getOptionLabel={(translation) => translation.language}
      // I added this because if there was an empty value, it would go back to default.
      onChange={(event, newValue) => {
        if (!newValue) {
          event.preventDefault();
        }
        setInputValue((oldValue) => newValue || oldValue);
      }}
      // onClose={(event, reason) => {
      //   if (reason === "blur") {
      //     event.stopPropagation();
      //   }
      //   console.log(reason);
      // }}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            className: classes.comboBox,
            startAdornment: (
              <Box display="flex" alignItems="center" pr={1}>
                <TranslationIcon status={inputValue?.status || ""} />
              </Box>
            )
          }}
          label="Translation"
          size="small"
          variant="outlined"
        />
      )}
      renderGroup={({ group: status, children }) => (
        <Box key={status}>
          <Box bgcolor={surface.light.secondary} px={1} py={0.25}>
            <Typography color="textPrimary" variant="caption">
              {PLAN_STATUSES[status].readable}
            </Typography>
          </Box>
          {children}
        </Box>
      )}
      renderTags={TranslationMenuActions}
      renderOption={(translation) => <TranslationOption {...translation} />}
      value={inputValue}
    />
  );
}

function LanguageNumIcon({ numberOfLangs }) {
  if (numberOfLangs > 1) {
    // Why use absolute positioning if the badge can do that automatically?
    // The placement of the badge does not match the desired placement in the designs.
    return (
      <Box position="relative">
        <Box position="absolute" top={-4} right={4}>
          <Badge color="primary" badgeContent={numberOfLangs} />
        </Box>
        <LanguageIcon fontSize="large" />
      </Box>
    );
  }

  return <LanguageIcon fontSize="large" />;
}

export function TranslationPicker() {
  const initialValue = planTranslations.find(
    (translation) => translation.locale
  );
  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center" mr={1}>
        <LanguageNumIcon numberOfLangs={planTranslations.length} />
      </Box>
      <TranslationComboBox
        initialValue={initialValue}
        translations={planTranslations}
      />
    </Box>
  );
}
