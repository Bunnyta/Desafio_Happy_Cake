import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-danger">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink
            to="/Home"
            className={({ isActive }) => (isActive ? "active ms-3" : "ms-3")}
          >
            Home 🏠
          </NavLink> 
        </li>
        <li className="nav-item">
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? "active ms-3" : "ms-3")}
          >
            Contact 📒
          </NavLink>
        </li>
      </ul>
      <span className="navbar-text ">Happy Cake 🍰</span>
      
    </nav>
  );
}
