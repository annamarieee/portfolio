import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/404";
import About from "./pages/About";
import Certificates from "./pages/Certificates";
import Experience from "./pages/Experience";
import Welcome from "./components/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/certificates">
          <Certificates />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        {/* <Route path="/contact">
          <Contact />
        </Route> */}
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
