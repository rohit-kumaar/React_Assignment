import React from "react";
import logo from "../../src/products/image/logo.png";

const formSignin = {
  width: "100%",
  maxWidth: "330px",
  padding: "15px",
  margin: "auto",
};

function Login() {
  return (
    <>
      <main className="container" style={{ backgroundColor: "whitesmoke" }}>
        <form style={formSignin}>
          <img src={logo} alt="logo" style={{ width: "100%" }} />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2021-2022</p>
        </form>
      </main>
    </>
  );
}

export default Login;
