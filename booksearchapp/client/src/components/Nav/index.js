import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <a className="navbar-brand" href="/">
     Search Book
      </a>
      <a className="navbar-brand" href="/saved">
      Saved Book List
      </a>
    </nav>
  );
}

export default Nav;
