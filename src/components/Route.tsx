import Layout from "./Layout";
import SprintCreation from "../pages/SprintCreation/SprintCreation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ApplicationRoutes = () => {
  return (
    <>
      <Router>
        <Layout />
        <Routes>
          <Route path="/createSprint" element={<SprintCreation />}></Route>
          <Route path="/createSprint" element={<SprintCreation />}></Route>
          <Route path="/createSprint" element={<SprintCreation />}></Route>
          <Route />
        </Routes>
      </Router>
    </>
  );
};

export default ApplicationRoutes;
