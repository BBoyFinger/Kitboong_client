import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStar, FaTruck, FaShieldAlt, FaHeadset, FaGift } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = [
    { id: 1, name: 'Kit Boong Premium', price: 299000, originalPrice: 399000, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop', rating: 4.8, reviews: 124, badge: 'Bán chạy' },
    { id: 2, name: 'Kit Boong Deluxe', price: 199000, originalPrice: 249000, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop', rating: 4.6, reviews: 89, badge: 'Giảm giá' },
    { id: 3, name: 'Kit Boong Standard', price: 149000, originalPrice: 199000, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop', rating: 4.5, reviews: 67, badge: 'Mới' },
    { id: 4, name: 'Kit Boong Pro', price: 399000, originalPrice: 499000, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop', rating: 4.9, reviews: 156, badge: 'Cao cấp' }
  ];

  const features = [
    { icon: <FaTruck className="w-8 h-8 text-primary-500" />, title: 'Giao hàng miễn phí', description: 'Giao hàng miễn phí toàn quốc cho đơn hàng từ 500k' },
    { icon: <FaShieldAlt className="w-8 h-8 text-primary-500" />, title: 'Bảo hành chính hãng', description: 'Bảo hành 12 tháng chính hãng, đổi trả trong 30 ngày' },
    { icon: <FaHeadset className="w-8 h-8 text-primary-500" />, title: 'Hỗ trợ 24/7', description: 'Đội ngũ tư vấn chuyên nghiệp, hỗ trợ mọi lúc' },
    { icon: <FaGift className="w-8 h-8 text-primary-500" />, title: 'Quà tặng hấp dẫn', description: 'Tặng kèm phụ kiện và voucher giảm giá cho khách hàng' }
  ];

  const testimonials = [
    { name: 'Nguyễn Văn A', role: 'Khách hàng thân thiết', content: 'Kit Boong thực sự rất chất lượng! Tôi đã sử dụng được 2 năm và vẫn hoạt động tốt như mới.', rating: 5, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
    { name: 'Trần Thị B', role: 'Khách hàng mới', content: 'Giao hàng nhanh, sản phẩm đúng như mô tả. Rất hài lòng với dịch vụ của Kit Boong!', rating: 5, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face' },
    { name: 'Lê Văn C', role: 'Khách hàng VIP', content: 'Chất lượng sản phẩm vượt trội, giá cả hợp lý. Đây là thương hiệu tôi tin tưởng nhất!', rating: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] py-20">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <FaStar className="w-4 h-4 mr-2" />
                Thương hiệu uy tín 10+ năm
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 font-display leading-tight">Kit Boong<span className="block text-primary-600">Chất lượng hàng đầu</span></h1>
              <p className="text-xl text-gray-600 leading-relaxed">Khám phá bộ sưu tập Kit Boong đa dạng với chất lượng cao cấp, thiết kế hiện đại và giá cả hợp lý. Đáp ứng mọi nhu cầu của bạn.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-primary text-lg px-8 py-4"><FaShoppingCart className="w-5 h-5 mr-2" />Mua ngay</Link>
                <Link to="/about" className="btn-outline text-lg px-8 py-4">Tìm hiểu thêm</Link>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2"><FaStar className="w-5 h-5 text-yellow-400" /><span>4.8/5 từ 1000+ đánh giá</span></div>
                <div className="flex items-center space-x-2"><FaTruck className="w-5 h-5 text-green-500" /><span>Giao hàng miễn phí</span></div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10"><img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop" alt="Kit Boong Premium" className="w-full h-auto rounded-2xl shadow-2xl" /></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 animate-bounce-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-display mb-4">Tại sao chọn Kit Boong?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Chúng tôi cam kết mang đến những sản phẩm chất lượng nhất với dịch vụ khách hàng hoàn hảo</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-display">{(feature as any).title}</h3>
                <p className="text-gray-600 leading-relaxed">{(feature as any).description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-display mb-4">Sản phẩm nổi bật</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Khám phá những sản phẩm Kit Boong được yêu thích nhất với chất lượng vượt trội</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12"><Link to="/products" className="btn-primary text-lg px-8 py-4">Xem tất cả sản phẩm</Link></div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-display mb-4">Khách hàng nói gì?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Những đánh giá chân thực từ khách hàng đã sử dụng sản phẩm Kit Boong</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="flex justify-center mb-6"><img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover" /></div>
                <div className="flex justify-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (<FaStar key={i} className="w-5 h-5 text-yellow-400" />))}</div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <h4 className="font-semibold text-gray-900 mb-1">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white font-display mb-6">Sẵn sàng trải nghiệm Kit Boong?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">Đăng ký ngay để nhận thông báo về các sản phẩm mới và ưu đãi đặc biệt</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Nhập email của bạn" className="flex-1 px-6 py-4 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600" />
            <button className="btn-secondary whitespace-nowrap">Đăng ký</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
