import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './component/Auth/AuthContext';
import Home from './component/Pages/Home';
import About from './component/Pages/About';
import Categories from './component/Pages/Categories';
import HowItWorks from './component/Pages/HowItWorks';
import LiveAuctions from './component/Pages/LiveAuctions';

import Login from './component/Auth/Login';
import Signup from './component/Auth/Signup';
import ProtectedRoute from './component/Auth/ProtectedRoute';
import NAVBAR from './component/layout/NAVBAR';
import FOOTER from './component/layout/FOOTER';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <NAVBAR />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/live-auctions" element={<LiveAuctions />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* Protected Routes - Only Dashboard requires auth */}
              <Route element={<ProtectedRoute />}>
               
              </Route>
            </Routes>
          </main>
          <FOOTER />
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
