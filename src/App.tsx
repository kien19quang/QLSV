import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Home from "./modules/home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="" element={<MainLayout />}>
            <Route index path="" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
