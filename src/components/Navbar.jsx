import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
        <h2>Netflix-clone</h2>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
