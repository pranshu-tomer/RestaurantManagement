import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RestaurantRegister from './pages/RestaurantRegister';
import RestaurantLogin from './pages/RestaurantLogin';
import UserRegister from './pages/UserRegister';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<RestaurantLogin />} />
          <Route path="/restaurant/register" element={<RestaurantRegister />} />
          <Route path="/user/register" element={<UserRegister />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;