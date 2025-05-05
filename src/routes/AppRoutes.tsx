import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { FooterLinks } from "../components/Footer/FooterLinks";
import ResourceDetailPage from "../pages/ResourceDetailPage";
import NavbarHeader from "../components/Navbar/NavbarHeader";
import ResourceListPage from "../pages/ResourceListingPage";
import useScrollToTop from "../hooks/useScrollToTop";
import LandingPage from "../pages/LandingPage";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../pages/LoginPage";

const LayoutWithNavbar = () => (
  <>
    <NavbarHeader />
    <Outlet />
    <FooterLinks />
  </>
);

const ProtectedLayout = () => (
  <ProtectedRoute>
    <LayoutWithNavbar />
  </ProtectedRoute>
);

const AppRoutes = () => {
  useScrollToTop();
  return (
    <Routes>
      <Route element={<LayoutWithNavbar />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedLayout />}>
        <Route path="/resources" element={<ResourceListPage />} />
        <Route path="/resources/:launchId" element={<ResourceDetailPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/resources" />} />
    </Routes>
  );
};

export default AppRoutes;
