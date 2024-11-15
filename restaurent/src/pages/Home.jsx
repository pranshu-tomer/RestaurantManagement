import React from 'react';
import { Search, UtensilsCrossed, QrCode, CreditCard } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-6xl">
              Transform Your Restaurant Experience
            </h1>
            <p className="mt-6 text-xl text-indigo-100">
              Connect with customers digitally, manage orders efficiently, and grow your business
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a href="/register" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                Register Restaurant
              </a>
              <a href="/restaurants" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Find Restaurants
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <QrCode className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Scan & Order</h3>
            <p className="text-gray-600">
              Scan the QR code at your table to view the digital menu and place orders instantly
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <CreditCard className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600">
              Pay securely through our integrated payment gateway with multiple options
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <UtensilsCrossed className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Restaurant Dashboard</h3>
            <p className="text-gray-600">
              Manage menu, track orders, and engage with customers through a powerful dashboard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}