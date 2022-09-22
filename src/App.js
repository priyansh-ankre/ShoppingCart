import "./App.css";
// import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Cart from "./components/Cart";
import { lazy } from "react";
import { Suspense } from "react";

const Home = lazy(()=>import('./components/Home'))
const Cart = lazy(()=>import('./components/Cart'))
const Header = lazy(()=>import('./components/Header'))

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
