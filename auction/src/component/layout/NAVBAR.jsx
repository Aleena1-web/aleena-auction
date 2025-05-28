import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
import { FaGavel, FaUser, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

export default function NAVBAR() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logOut } = useAuth();

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/live-auctions', label: 'Live Auctions' },
    { to: '/categories', label: 'Categories' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/about', label: 'About' },
    
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center py-4">
              <FaGavel className="text-yellow-500 text-2xl mr-2" />
              <span className="font-semibold text-gray-900 text-lg">BidMaster</span>
            </Link>
          </div>

          {/* Primary nav - Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `py-4 px-3 font-medium transition duration-300 ${
                    isActive
                      ? 'text-yellow-600 border-b-2 border-yellow-600'
                      : 'text-gray-500 hover:text-yellow-600'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Auth buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4 ml-6">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 flex items-center">
                  <FaUser className="mr-1" /> {user.email.split('@')[0]}
                </span>
                <button
                  onClick={logOut}
                  className="flex items-center px-3 py-2 text-sm rounded-md text-white bg-red-500 hover:bg-red-600 transition-colors"
                >
                  <FaSignOutAlt className="mr-1" /> Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-3 py-2 text-sm rounded-md text-white bg-yellow-600 hover:bg-yellow-700 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-600 focus:outline-none"
              aria-label="Main menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          <div className="border-t border-gray-200 pt-4 mt-2">
            {user ? (
              <>
                <div className="flex items-center px-3 py-2 text-gray-700">
                  <FaUser className="mr-2" /> {user.email}
                </div>
                <button
                  onClick={() => {
                    logOut();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
                >
                  <FaSignOutAlt className="mr-2" /> Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}