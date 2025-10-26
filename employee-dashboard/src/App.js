import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Home from "./components/Home";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<EmployeeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
