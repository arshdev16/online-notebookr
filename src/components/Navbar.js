import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  let location = useLocation();
 

  const onLogout = ()=>{
    localStorage.removeItem("token");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            E-Notebook
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
            </ul>
            {!localStorage.getItem('token')?
            <form>
            <Link className="btn btn-primary mx-2" to="/login" role="button">
              Login
            </Link>
            <Link className="btn btn-primary mx-2" to="/signup" role="button">
              Sign Up
            </Link>
            </form>:<form><button onClick={onLogout} className="btn btn-primary mx-2">Logout</button></form>}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
