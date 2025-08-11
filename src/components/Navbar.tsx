import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = (): void => setIsSearchOpen(!isSearchOpen);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-2xl font-bold text-gray-800 font-display">
              Kit Boong
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Trang chủ
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Sản phẩm
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Giới thiệu
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Liên hệ
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-600 hover:text-primary-500 transition-colors"
            >
              <FaSearch className="w-5 h-5" />
            </button>
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-primary-500 transition-colors">
              <FaShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Link>
            <Link to="/login" className="btn-primary">
              <FaUser className="w-4 h-4 mr-2" />
              Đăng nhập
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-primary-500 transition-colors"
          >
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-4">
              <Link
                to="/"
                className="block text-gray-700 hover:text-primary-500 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Trang chủ
              </Link>
              <Link
                to="/products"
                className="block text-gray-700 hover:text-primary-500 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sản phẩm
              </Link>
              <Link
                to="/about"
                className="block text-gray-700 hover:text-primary-500 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Giới thiệu
              </Link>
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-primary-500 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Liên hệ
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/cart"
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-500 font-medium transition-colors mb-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaShoppingCart className="w-5 h-5" />
                  <span>Giỏ hàng (3)</span>
                </Link>
                <Link
                  to="/login"
                  className="btn-primary w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaUser className="w-4 h-4 mr-2 inline" />
                  Đăng nhập
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
