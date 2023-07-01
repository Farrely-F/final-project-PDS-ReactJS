/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Dashboard from "./components/DashboardData";
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardInput from "./components/DashboardInput";
import JobsCards from "./components/JobsCards";
import JobDetails from "./components/JobDetails";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboard/table" element={<Dashboard />}></Route>
          <Route path="/dashboard/add" element={<DashboardInput />}></Route>
          <Route path="/dashboard/edit/:jobId" element={<DashboardInput />}></Route>
          <Route path="/vacancy" element={<JobsCards />}></Route>
          <Route path="/job-details/:id" element={<JobDetails />}></Route>
        </Routes>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
