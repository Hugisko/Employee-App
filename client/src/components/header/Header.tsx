import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Employees</h1>
      <div className="links">
        <NavLink to="/">home</NavLink>
        <NavLink to="/post">post employee</NavLink>
      </div>
    </div>
  );
};

export default Header;
