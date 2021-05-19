import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import NavbarSection from "./Components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage";
import FooterSection from "./Components/Footer";


function App() {
  return (
    <>
      <NavbarSection />
      <Switch>
      <Route exact path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
      <FooterSection/>
    </>
  );
}

export default App;
