import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import IndexPage from './Pages/IndexPage';
import Sidebar from './Components/Sidebar';
import  Box  from '@mui/material/Box';
import News from './Pages/News';
import About from './Pages/About';
import Organize from './Pages/Organize';
import Company from './Pages/Company';
import Rewards from './Pages/Rewards';
import Certificate from './Pages/Certificate';

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
    <Router basename='/time-technology-association.com'>
      <Box >
        <Navbar handleMenu={handleMenu} />
        <Sidebar display={SidebarDisplay} />
        <Routes>
          <Route path="/" element={<Navigate to="/IndexPage" replace />}></Route>
          <Route path="/IndexPage" element={<IndexPage />} />
          <Route path="/News" element={<News />} />
          <Route path="/About" element={<About />} />
          <Route path="/Organize" element={<Organize />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Rewards" element={<Rewards />} />
          <Route path="/Certificate" element={<Certificate />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
