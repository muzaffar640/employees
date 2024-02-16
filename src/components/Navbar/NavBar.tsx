import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useFilterContext } from "../../context/FilterContext";

const AppLogo = styled(Typography)(({ theme }) => ({
  color: "white",
  flexGrow: 1,
  [theme.breakpoints.up("xs")]: {
    paddingLeft: "1ch",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "2ch",
    },
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "25px",
  backgroundColor: alpha(theme.palette.common.white, 1),
  marginLeft: 0,
  width: "100%",
  height: "4ch",
  [theme.breakpoints.up("xs")]: {
    marginLeft: "auto",
    width: "15ch",
    "&:focus": {
      width: "20ch",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("xs")]: {
      width: "8ch",
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
        "&:focus": {
          width: "25ch",
        },
        [theme.breakpoints.up("md")]: {
          width: "30ch",
          "&:focus": {
            width: "40ch",
          },
        },
      },
    },
  },
}));

export const NavBar = () => {
  const { setFilter } = useFilterContext();
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, width: "100vw" }}>
      <AppBar>
        <Toolbar>
          <AppLogo variant="h4" noWrap>
            Team
          </AppLogo>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
              onChange={handleSearchChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
