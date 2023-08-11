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
import Search from "./pages/Search";
import ExportLists from "./pages/ExportLists";

export default function App() {;

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/search" element={<Search/>} />
          <Route exact path="/export-lists" element={<ExportLists/>} />
        </Routes>
    </Router>
  );
}