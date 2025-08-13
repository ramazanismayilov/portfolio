import { Route, Routes } from "react-router";
import ClientLayout from "../layouts/ClientLayout";
import Home from "../pages/client/Home";
import About from "../pages/client/About";
import Projects from "../pages/client/Projects";
import Contact from "../pages/client/Contact";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardAbout from "../pages/dashboard/About";
import DashboardHome from "../pages/dashboard/Home";
import DashboardProjects from "../pages/dashboard/Projects";
import DashboardContact from "../pages/dashboard/Contact";
import Resume from "../pages/client/Resume";
import DashboardResume from "../pages/dashboard/Resume";

export const Router = () => {
  return (
    <Routes>
      {/* ClientLayout */}
      <Route element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      {/* DashboardLayout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index  element={<DashboardHome />} />
        <Route path="about" element={<DashboardAbout />} />
        <Route path="projects" element={<DashboardProjects />} />
        <Route path="resume" element={<DashboardResume />} />
        <Route path="contact" element={<DashboardContact />} />
      </Route>
    </Routes>
  );
};

export default Router;
