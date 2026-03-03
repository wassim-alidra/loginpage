import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RoleSelect from './pages/RoleSelect';
import RegisterFarmer from './pages/RegisterFarmer';
import RegisterTransporter from './pages/RegisterTransporter';
import RegisterBuyer from './pages/RegisterBuyer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register/select" element={<RoleSelect />} />
          <Route path="/register/farmer" element={<RegisterFarmer />} />
          <Route path="/register/transporter" element={<RegisterTransporter />} />
          <Route path="/register/buyer" element={<RegisterBuyer />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
