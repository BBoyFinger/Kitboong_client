import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStar, FaTruck, FaShieldAlt, FaHeadset, FaGift } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = [
    { id: 1, name: 'Kit Boong Premium', price: 299000, originalPrice: 399000, image: '/images/kitboong1/1.webp', rating: 4.8, reviews: 124, badge: 'Bán chạy' },
    { id: 2, name: 'Kit Boong Deluxe', price: 199000, originalPrice: 249000, image: '/images/kitboong1/2.webp', rating: 4.6, reviews: 89, badge: 'Giảm giá' },
    { id: 3, name: 'Kit Boong Standard', price: 149000, originalPrice: 199000, image: '/images/kitboong1/3.webp', rating: 4.5, reviews: 67, badge: 'Mới' },
    { id: 4, name: 'Kit Boong Pro', price: 399000, originalPrice: 499000, image: '/images/kitboong.jpg', rating: 4.9, reviews: 156, badge: 'Cao cấp' }
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
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[350px] py-10">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <FaStar className="w-4 h-4 mr-2" />
                Thương hiệu uy tín 10+ năm
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 font-display leading-tight">Kit Boong<span className="block text-primary-600">Chất lượng hàng đầu</span></h1>
              <p className="text-lg text-gray-600 leading-relaxed">Khám phá bộ sưu tập Kit Boong đa dạng với chất lượng cao cấp, thiết kế hiện đại và giá cả hợp lý. Đáp ứng mọi nhu cầu của bạn.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-primary text-sm px-8 py-4 flex"><FaShoppingCart className="w-5 h-5 mr-2" />Mua ngay</Link>
                <Link to="/about" className="btn-outline text-sm px-8 py-4">Tìm hiểu thêm</Link>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2"><FaStar className="w-5 h-5 text-yellow-400" /><span>4.8/5 từ 1000+ đánh giá</span></div>
                <div className="flex items-center space-x-2"><FaTruck className="w-5 h-5 text-green-500" /><span>Giao hàng miễn phí</span></div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10"><img src="/images/kitboong1/2.webp" alt="Kit Boong Premium" className="w-full object-contain h-auto rounded-2xl shadow-2xl max-h-60 md:max-h-72" /></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 animate-bounce-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
            </div>
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

     

     
    </div>
  );
};

export default Home;
