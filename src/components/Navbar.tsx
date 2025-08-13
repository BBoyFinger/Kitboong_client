import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = (): void => setIsSearchOpen(!isSearchOpen);
  const changeLang = (lng: string) => i18n.changeLanguage(lng);

  return (
    <nav className="bg-white/90 backdrop-blur shadow-lg sticky top-0 z-50 border-b border-primary-100">
      <div className="container-custom">
        {/* Header Row: 3 columns for mobile, centered for desktop */}
        <div className="flex items-center justify-between md:justify-center py-3 md:py-4 relative">
          {/* Left: Menu button (mobile only) */}
          <div className="flex items-center w-16 md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-primary-500 focus:outline-none"
              aria-label="Menu"
            >
              {isMenuOpen ? <FaTimes className="w-7 h-7" /> : <FaBars className="w-7 h-7" />}
            </button>
          </div>

          {/* Center: Logo (always centered absolutely on mobile, flex center on desktop) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 flex-1 flex justify-center">
            <Link to="/" className="flex items-center space-x-2 group select-none">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <span className="text-white font-extrabold text-2xl tracking-widest drop-shadow">K</span>
              </div>
              <span className="hidden sm:inline text-2xl md:text-3xl font-extrabold text-primary-700 font-display tracking-wide group-hover:text-primary-600 transition-colors uppercase">Kit Boong</span>
            </Link>
          </div>

          {/* Right: Icons (mobile: right, desktop: static right) */}
          <div className="flex items-center justify-end w-16 md:w-auto absolute right-0 top-1/2 -translate-y-1/2 md:static md:translate-y-0 space-x-2">
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-600 hover:text-primary-500 transition-colors rounded-full bg-primary-50 hover:bg-primary-100 mr-1"
              aria-label="Tìm kiếm"
            >
              <FaSearch className="w-5 h-5" />
            </button>
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-primary-500 transition-colors rounded-full bg-primary-50 hover:bg-primary-100" aria-label="Giỏ hàng">
              <FaShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">2</span>
            </Link>
            <Link to="/login" className="p-2 text-gray-600 hover:text-primary-500 transition-colors rounded-full bg-primary-50 hover:bg-primary-100" aria-label="Tài khoản">
              <FaUser className="w-5 h-5" />
            </Link>
            {/* Language Switcher */}
            <button
              onClick={() => changeLang(i18n.language === 'vi' ? 'en' : 'vi')}
              className="ml-2 px-2 py-1 rounded bg-gray-100 text-primary-700 font-bold uppercase text-xs hover:bg-primary-500 hover:text-white transition-colors"
              aria-label="Chuyển đổi ngôn ngữ"
            >
              {i18n.language === 'vi' ? 'EN' : 'VI'}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center space-x-8 text-base font-bold tracking-widest uppercase mt-2 mb-2">
          <Link to="/" className="header__menu-item">{t('HOME')}</Link>
          <Link to="/collections/all" className="header__menu-item">{t('PRODUCTS')}</Link>
          <Link to="/collections/custom-bongs" className="header__menu-item">{t('CUSTOM BONGS')}</Link>
          <Link to="/collections/mason-jar-bongs" className="header__menu-item">{t('MASON JAR BONGS')}</Link>
          <Link to="/collections/bowls-bangers" className="header__menu-item">{t('BOWLS AND BANGERS')}</Link>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200">
            <div className="relative max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        )}

        {/* Mobile Drawer Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 flex">
            <div className="w-72 h-full shadow-xl p-6 flex flex-col bg-white z-50 border-r border-primary-100">
              <button
                onClick={toggleMenu}
                className="self-end mb-6 p-2 text-gray-600 hover:text-primary-500"
                aria-label="Đóng menu"
              >
                <FaTimes className="w-7 h-7" />
              </button>
              <nav className="flex-1">
                <ul className="space-y-2 text-lg font-bold uppercase">
                  <li><Link to="/" className="header__menu-item block text-primary-700 font-bold hover:bg-primary-50 hover:text-primary-600 rounded-md px-3 py-2 transition-colors" onClick={toggleMenu}>{t('HOME')}</Link></li>
                  <li><Link to="/collections/all" className="header__menu-item block text-primary-700 font-bold hover:bg-primary-50 hover:text-primary-600 rounded-md px-3 py-2 transition-colors" onClick={toggleMenu}>{t('PRODUCTS')}</Link></li>
                  <li><Link to="/collections/custom-bongs" className="header__menu-item block text-primary-700 font-bold hover:bg-primary-50 hover:text-primary-600 rounded-md px-3 py-2 transition-colors" onClick={toggleMenu}>{t('CUSTOM BONGS')}</Link></li>
                  <li><Link to="/collections/mason-jar-bongs" className="header__menu-item block text-primary-700 font-bold hover:bg-primary-50 hover:text-primary-600 rounded-md px-3 py-2 transition-colors" onClick={toggleMenu}>{t('MASON JAR BONGS')}</Link></li>
                  <li><Link to="/collections/bowls-bangers" className="header__menu-item block text-primary-700 font-bold hover:bg-primary-50 hover:text-primary-600 rounded-md px-3 py-2 transition-colors" onClick={toggleMenu}>{t('BOWLS AND BANGERS')}</Link></li>
                </ul>
              </nav>
              <div className="mt-8 flex flex-col gap-3">
                <Link to="/login" className="btn-primary w-full text-center py-2 rounded-lg font-bold" onClick={toggleMenu}>{t('LOGIN')}</Link>
                <Link to="/cart" className="w-full text-center py-2 rounded-lg border border-primary-500 text-primary-500 font-bold hover:bg-primary-50" onClick={toggleMenu}>{t('CART')}</Link>
                <div className="flex justify-center gap-2 mt-4">
                  <button onClick={() => changeLang('vi')} className={`px-2 py-1 rounded ${i18n.language === 'vi' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-primary-700'}`}>VI</button>
                  <button onClick={() => changeLang('en')} className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-primary-700'}`}>EN</button>
                </div>
              </div>
            </div>
            <div className="flex-1" onClick={toggleMenu}></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
