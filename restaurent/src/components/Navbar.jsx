import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <UtensilsCrossed className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-800">FoodieConnect</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/restaurants" className="text-gray-600 hover:text-indigo-600">
              Find Restaurants
            </Link>
            <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Register Restaurant
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}