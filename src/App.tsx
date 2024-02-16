import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppLayout from "./layout/AppLayout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#84a3f6",
      },
      info: {
        main: "#FFFFFF",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
