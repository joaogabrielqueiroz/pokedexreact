import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { keyframes } from "@mui/system";

const pulse = keyframes`
0% {
  opacity: 0.8;
}
50% {
  opacity: 0.9;
  color: white;
}
100% {
  opacity: 0.8;
}
`;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:active": {
    animation: `${pulse} 0.5s ease-in-out`,
  },
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
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
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar({ pokemonFilter, hideSearch }) {

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "5em" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#000000", borderBottom: "2px solid #333" }}
      >
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box
              component="img"
              src="/assets/pokemon-logo.png"
              height="2.5em"
              sx={{ cursor: "pointer" }}

            />
            {!hideSearch ? (
              <Search
                onChange={(e) => pokemonFilter(e.target.value.toLowerCase())}
              >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Pesquisa"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            ) : null}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
