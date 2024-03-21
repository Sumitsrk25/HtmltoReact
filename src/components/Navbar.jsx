import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <header className="navbar-light navbar-sticky">
        {/* Logo Nav START */}
        <nav className="navbar navbar-expand-xl">
          <div className="container">
            <div className="col-2 col-md-2 col-xl-2 d-flex justify-content-center pe-0">
              {/* Logo START */}
              <a className="navbar-brand" href style={{}}>
                <img
                  className="light-mode-item navbar-brand-item"
                  src="assets/images/logo/logo.svg"
                  style={{ width: "150px", height: "50px" }}
                  alt="logo"
                />
                <img
                  className="dark-mode-item navbar-brand-item"
                  src="assets/images/logo/logo.svg"
                  alt="logo"
                />
              </a>
              {/* Logo END */}
            </div>
            {/* Responsive navbar toggler */}
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-animation">
                <span />
                <span />
                <span />
              </span>
            </button>
            {/* Main navbar START */}
            <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
              <div className="col-7 col-md-7 col-xl-7 d-flex justify-content-center pe-0">
                {/* Nav Main menu START */}
                <ul className="navbar-nav navbar-nav-scroll mx-auto">
                  <li className="nav-item mx-2">
                    <a className="nav-link headerfont active" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link headerfont" href="#">
                      Assets
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link headerfont" href="#">
                      Learn
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link headerfont" href="blogs.html">
                      Blogs
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link headerfont" href="#">
                      About
                    </a>
                  </li>
                </ul>
              </div>
              {/* Nav Main menu END */}
              <div className="col-3 col-md-3 col-xl-3 d-flex justify-content-end pe-0">
                <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
                  {/* Search */}
                  <li className="nav-item ms-2 d-none d-md-block">
                    <a
                      href="login.html"
                      className="btn btn-outline-success me-2 mb-0"
                    >
                      Log In
                    </a>
                  </li>
                  {/* Sign In button */}
                  <li className="nav-item ms-2 d-none d-md-block">
                    <a href className="btn btn-primary me-2 mb-0 loginbtn">
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Main navbar END */}
          </div>
        </nav>
        {/* Logo Nav END */}
      </header>
    </>
  );
};
