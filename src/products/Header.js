import React from "react";
import logo from "../products/image/logo.png";
import flag from "../products/image/india-flag.png";

import { faCartArrowDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const logoStyle = {
  width: "129px",
  hight: "50px",
  borderRadius: "5px",
};

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" style={logoStyle} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 ml-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <div className="input-group mx-3 ">
                  <button type="button" className="btn btn-outline-secondary">
                    All
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ borderLeft: "1px solid #223" }}
                  >
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        All Catogories
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Beauty
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Books
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Deals
                      </a>
                    </li>
                  </ul>
                  <input
                    type="text"
                    className="form-control "
                    aria-label="Text input with segmented dropdown button"
                    style={{ width: " 910px" }}
                  />
                  <button type="button" className="btn  btn-warning bg-warning">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </li>

              <div className="btn-group mx-4">
                <button
                  type="button"
                  className="btn btn-dark btn-outline-secondary"
                >
                  <img
                    src={flag}
                    style={{
                      width: "24px",
                      height: "18px",
                      objectFit: "cover",
                    }}
                  />
                </button>
                <button
                  type="button"
                  className="btn btn-dark btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <div className="form-check mx-2 ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        English - EN
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check mx-2 ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        हिंदी - HI
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </ul>
            <form className="d-flex text-white " style={{ cursor: "pointer" }}>
              <a className="text-decoration-none text-light" href="/login">
                Log in
              </a>
            </form>
            <div className="btn btn-dark text-white p-0 mx-2 ">
              <FontAwesomeIcon
                className="text-white h3 my-0"
                icon={faCartArrowDown}
              />
              Cart
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
