import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// import Home from "./pages/auth/Home";
import Home from "./pages/Inventory/Inventory"
import Medicines from "./pages/auth/Medicines";
import About from "./pages/auth/About";
import Register from "./pages/auth/Register";
import AdminLogin from "./pages/auth/AdminLogin";

import AdminDashboard from "./pages/auth/AdminDashboard";
// import Inventory from "./pages/auth/inventory/Inventory";
import Inventory from "./pages/Inventory/Inventory"
import Reports from "./pages/reports/Reports";
import Billing from "./pages/billing/Billing";
import Users from "./pages/users/Users";
import Settings from "./pages/settings/Settings";
import Suppliers from "./pages/suppilers/Suppilers";

function App() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1, padding: "20px" }}>

          <Routes>

            {/* default route */}
            <Route path="/" element={<Home />} />

            <Route path="/homepage" element={<Home />} />
            <Route path="/medicines" element={<Medicines />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />

            <Route path="/adminlogin" element={<AdminLogin />} />

            <Route
              path="/admindashboard"
              element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}
            />

            <Route path="/Inventory" element={<ProtectedRoute><Inventory /></ProtectedRoute>} />
            <Route path="/suppliers" element={<ProtectedRoute><Suppliers /></ProtectedRoute>} />
            <Route path="/billing" element={<ProtectedRoute><Billing /></ProtectedRoute>} />
            <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
            <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />

          </Routes>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;