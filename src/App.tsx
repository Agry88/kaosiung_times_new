import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import IndexPage from './Pages/IndexPage';
import Sidebar from './Components/Sidebar';
import  Box  from '@mui/material/Box';

function App() {
  const [SidebarDisplay, setSidebarDisplay] = React.useState("none");

  const handleMenu = () => {
    if (SidebarDisplay == "none") {
      setSidebarDisplay("grid");
    } else {
      setSidebarDisplay("none");
    }
  }

  return (
    <Router>
      <Box >
        <Navbar handleMenu={handleMenu} />
        <Sidebar display={SidebarDisplay} />
        <Routes>
          <Route path="/" element={<Navigate to="/IndexPage" replace />}></Route>
          <Route path="/IndexPage" element={<IndexPage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
