import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-2xl font-bold font-display">Kit Boong</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Thương hiệu uy tín hàng đầu trong lĩnh vực cung cấp các sản phẩm chất lượng cao với giá cả hợp lý.
            </p>
                         <div className="flex space-x-4">
               <button className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors duration-300">
                 <FaFacebook className="w-5 h-5" />
               </button>
               <button className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors duration-300">
                 <FaInstagram className="w-5 h-5" />
               </button>
               <button className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors duration-300">
                 <FaTwitter className="w-5 h-5" />
               </button>
               <button className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors duration-300">
                 <FaYoutube className="w-5 h-5" />
               </button>
             </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-display">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Tin tức
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-display">Hỗ trợ khách hàng</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Hướng dẫn mua hàng
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Chính sách vận chuyển
                </Link>
              </li>
              <li>
                <Link to="/return" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Chính sách bảo hành
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-display">Thông tin liên hệ</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    123 Đường ABC, Thành phố Hà Giang<br />
                    Hà Giang, Việt Nam
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">+84 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">info@kitboong.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 font-display">
              Đăng ký nhận tin tức
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Nhận thông báo về các sản phẩm mới, khuyến mãi đặc biệt và tin tức mới nhất từ Kit Boong
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="btn-primary whitespace-nowrap">
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Kit Boong. Tất cả quyền được bảo lưu.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Chính sách bảo mật
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Điều khoản sử dụng
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 