import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import History from "../pages/History";
import Sensors from "../pages/Sensors";
import Profile from "../pages/Profile";
import MainLayout from "../layouts/MainLayout";

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/sensors" element={<Sensors />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
