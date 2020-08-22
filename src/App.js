import React from "react";
import "./App.css";
import { StylesProvider } from "@material-ui/core";
import Box from "./Components/Box";
function App() {
  return (
    <StylesProvider injectFirst>
      <Box />
    </StylesProvider>
  );
}

export default App;
