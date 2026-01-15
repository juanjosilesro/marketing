import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme/theme";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { ProjectDetails } from "./views/ProjectDetails";
import { MainLayout } from "./MainLayout";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Route>
      </Routes>

    </ThemeProvider>
  );
}
