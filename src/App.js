import React from "react";
import "./App.css";

// theme imports
import styled, { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import { GlobalStyles } from "./theme/GlobalStyles";
import { useTheme } from "./theme/useTheme";

import { Provider } from "./context";
import Navbar from "./components/layouts/Navbar";
import Index from "./components/layouts/Index";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Lyrics from "./components/tracks/Lyrics";
import { useState, useEffect } from "react";
import ThemeSelector from "./components/layouts/ThemeSelector";

function App() {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme)
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  }, [themeLoaded]);

  return (
    <>
    {themeLoaded && (
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        </ThemeProvider>)
      }
      <Provider className="App">
      <Router>
        <React.Fragment>
          <Navbar />
          {/* <ThemeSelector setter={setSelectedTheme} theme={selectedTheme} /> */}
          <div className="container ">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyric/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
      </>
  );
}

export default App;
