import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
function Navbar() {
  return (
    <Stack
      direction="row"
      justifyContent="none"
      px="10px"
      sx={{ gap: { sm: "122px", xs: "40px" }, mt: { sm: "32px", xs: "20px" } }}
    >
      <Link to="/">
        <img
          src={Logo}
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
          alt="logo"
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: isActive
              ? "3px solid rgb(240, 20, 12)"
              : "3px solid transparent",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="exercises"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: isActive
              ? "3px solid rgb(240, 20, 12)"
              : "3px solid transparent",
          })}
        >
          Exercises
        </NavLink>
      </Stack>
    </Stack>
  );
}

export default Navbar;
