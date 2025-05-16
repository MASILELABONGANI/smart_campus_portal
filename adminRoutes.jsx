// src/routes/adminRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from '../pages/admin/AdminLogin';
import AdminDashboard from '../pages/admin/AdminDashboard';
import ProtectedRoute from '../components/ProtectedRoute';
import Navbar from './navbar';


const AdminRoutes = () => (
  <Routes>
    <Route path="/admin/login" element={<AdminLogin />} />
    <Route
      path="/admin/dashboard"
      element={
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default AdminRoutes;
