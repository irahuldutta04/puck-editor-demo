import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { LoginPage } from "../Pages/LoginPage";
import { NotFoundPage } from "../Pages/NotFoundPage";
import { RootLayout } from "../Layouts/RootLayout";
import { AdminLayout } from "../Layouts/AdminLayout";
import { AdminDashboardPage } from "../Pages/AdminDashboardPage";
import { SuperAdminLayout } from "../Layouts/SuperAdminLayout";
import { SuperAdminDashboardPage } from "../Pages/SuperAdminDashboardPage";
import { EditorPage } from "../Pages/EditorPage";
import { AdminProfilePage } from "../Pages/AdminProfilePage";
import { SuperAdminProfilePage } from "../Pages/SuperAdminProfilePage";
import PreviewSite from "../Pages/PreviewSite";

const isAuthenticatedAsAdmin = false; // Replace with your authentication logic
const isAuthenticatedAsSuperAdmin = true; // Replace with your authentication logic

export const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Render AdminLayout if authenticated, otherwise navigate to root */}
        <Route path="/" element={<HomePage />} />
        <Route path="/preview" element={<PreviewSite />} />
        {isAuthenticatedAsAdmin ? (
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="/admin/profile" element={<AdminProfilePage />} />
          </Route>
        ) : (
          <Route path="/admin/*" element={<Navigate to="/login" replace />} />
        )}

        {isAuthenticatedAsSuperAdmin ? (
          <Route path="/super-admin" element={<SuperAdminLayout />}>
            <Route path="/super-admin" element={<SuperAdminDashboardPage />} />
            <Route path="/super-admin/profile" element={<SuperAdminProfilePage />} />
          </Route>
        ) : (
          <Route path="/super-admin/*" element={<Navigate to="/" replace />} />
        )}

        {/* Routes for RootLayout */}
        <Route element={<RootLayout />}>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/editor/:id?" element={<EditorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
