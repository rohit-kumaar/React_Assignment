import "./App.css";
import Header from "./products/Header";
import Login from "./login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./products/Footer";
import Card from "./products/Card";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Card />
        {/* <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch> */}

        <Footer />
      </Router>
    </>
  );
}

export default App;
