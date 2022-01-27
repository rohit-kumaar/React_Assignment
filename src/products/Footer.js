import React from "react";
import logo from "../products/image/logo.png";

function Footer() {
  return (
    <>
      <div className=" bg-dark position-absolute w-100 bottom-0">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top container-fluid">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <img
                src={logo}
                alt="logo"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </a>
            <span className="text-muted">&copy; 2021 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Footer;
