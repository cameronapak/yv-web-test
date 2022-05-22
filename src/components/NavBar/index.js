import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import BookIcon from "@material-ui/icons/Book";
import DoneIcon from "@material-ui/icons/Done";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: 0,
    borderTop: `1px solid ${theme.palette.divider}`,
    left: 0,
    position: "fixed",
    width: "100%"
  }
}));

export function NavBar({ currentPage, onPageChange, ...props }) {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={currentPage}
      onChange={(event, newValue) => onPageChange(newValue)}
      {...props}
      className={classes.root}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Bible" icon={<BookIcon />} />
      <BottomNavigationAction disabled label="Plans" icon={<DoneIcon />} />
      <BottomNavigationAction disabled label="Discover" icon={<SearchIcon />} />
      <BottomNavigationAction disabled label="More" icon={<MenuIcon />} />
    </BottomNavigation>
  );
}
