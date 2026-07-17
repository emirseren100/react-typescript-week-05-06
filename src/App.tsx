import {
  Route,
  Routes,
} from "react-router";

import AppLayout from "./layouts/AppLayout";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";

import "./router.css";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route
          index
          element={<HomePage />}
        />

        <Route
          path="projects"
          element={<ProjectsPage />}
        />

        <Route
          path="about"
          element={<AboutPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;