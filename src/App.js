import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import "./App.css";
import Profile from "./pages/Profile";
import ExportList from "./pages/ExportList";
import UserDetail from "./pages/UserDetail";

export default function App() {;

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/export-list" element={<ExportList/>} />
          <Route exact path="/user-detail" element={<UserDetail/>} />
        </Routes>
    </Router>
  );
}