import "./App.css";
import Header from "./components/products/Header";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/products/Footer";
import Main from "./components/products/Main";
import Products from "./components/products/Products";
import Cart from "./components/products/Cart";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/home">
            <Main />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <CartProvider>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </CartProvider>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
