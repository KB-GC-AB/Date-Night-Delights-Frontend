import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to={"/search"}>
        <h1 className="list">Search Recipe</h1>
      </NavLink>
        <NavLink to={"/"}>
          <h1>Date Night Delights</h1>
        </NavLink>
        <NavLink to={"/new"}>
          <h1>Create New Recipe</h1>
        </NavLink>
    </div>
  );
}

export default Navbar;