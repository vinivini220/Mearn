import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";

import Home from "./pages/Inventory/Inventory";
import Medicines from "./pages/auth/Medicines";
import About from "./pages/auth/About";
import Register from "./pages/auth/Register";
import AdminLogin from "./pages/auth/AdminLogin";

import AdminDashboard from "./pages/auth/AdminDashboard";
import Inventory from "./pages/Inventory/Inventory";
import Reports from "./pages/reports/Reports";
import Billing from "./pages/billing/Billing";
import Users from "./pages/users/Users";
import Settings from "./pages/settings/Settings";
import Suppliers from "./pages/suppilers/Suppilers";

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  return (
    <ErrorBoundary>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/homepage" element={<Home />} />
            <Route path="/medicines" element={<Medicines />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/adminlogin"
              element={
                <AdminLogin onLogin={() => setIsAdminLoggedIn(true)} />
              }
            />

            <Route
              path="/admindashboard"
              element={
                isAdminLoggedIn ? (
                  <AdminDashboard setIsAdminLoggedIn={setIsAdminLoggedIn} />
                ) : (
                  <AdminLogin onLogin={() => setIsAdminLoggedIn(true)} />
                )
              }
            />

            <Route path="/Inventory" element={<Inventory />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </ErrorBoundary>
  );
}

export default App;
