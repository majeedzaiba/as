import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar title="A.s."/>
      {/*<div className="container"><TextForm/></div>}
      {<div className="container"><About/></div>*/}
        <Switch>
          <Route path="/TextForm">
            <TextForm />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
