import React from "react";
import "./App.css";

import { Provider } from "./context";
import Navbar from "./components/layouts/Navbar";
import Index from "./components/layouts/Index";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Lyrics from "./components/tracks/Lyrics";
import { useState } from "react";
import { useEffect } from "react";

const getStorageTheme = () => {
  let theme = "dark-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <Provider className="App">
      <Router>
        <Navbar changeTheme={toggleTheme} />
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/lyric/track/:id" component={Lyrics} />
          </Switch>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
