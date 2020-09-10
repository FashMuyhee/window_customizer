import React from "react";
import "./App.css";
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Window from "./view/window";
import Hinge from "./view/hinge";
import Handle from "./view/handle";
import Final from "./view/final";
import { AppProvider } from "./AppContext";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact component={Window} />
            <Route path="/handle" component={Handle} />
            <Route path="/hinge" component={Hinge} />
            <Route path="/final" component={Final} />
          </Switch>
        </main>
      </Router>
    </AppProvider>
  );
};

export default App;
