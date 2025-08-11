import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaAward, FaGlobe, FaHeart, FaShieldAlt, FaLightbulb } from 'react-icons/fa';

const About: React.FC = () => {
  const stats = [
    { number: '10+', label: 'Năm kinh nghiệm', icon: FaAward },
    { number: '50K+', label: 'Khách hàng hài lòng', icon: FaUsers },
    { number: '100+', label: 'Sản phẩm đa dạng', icon: FaGlobe },
    { number: '24/7', label: 'Hỗ trợ khách hàng', icon: FaHeart }
  ];

  const values = [
    {
      icon: FaShieldAlt,
      title: 'Chất lượng',
      description: 'Cam kết cung cấp sản phẩm chất lượng cao với tiêu chuẩn quốc tế'
    },
    {
      icon: FaHeart,
      title: 'Tận tâm',
      description: 'Luôn đặt lợi ích khách hàng lên hàng đầu, phục vụ với tất cả sự tận tâm'
    },
    {
      icon: FaLightbulb,
      title: 'Sáng tạo',
      description: 'Không ngừng đổi mới và sáng tạo để mang đến trải nghiệm tốt nhất'
    }
  ];

  const team = [
    {
      name: 'Lê Đình Trí',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      description: 'Với hơn 15 năm kinh nghiệm trong ngành công nghệ'
    },
    {
      name: 'Vũ Ngọc Tú',
      position: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
      description: 'Chuyên gia về phát triển sản phẩm và công nghệ mới'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"></div>
        <div className="container-custom relative z-10 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 font-display mb-6">
              Về Kit Boong
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Chúng tôi là thương hiệu tiên phong trong lĩnh vực sản xuất và phân phối 
              các sản phẩm chất lượng cao, mang đến trải nghiệm tuyệt vời cho khách hàng tại Hà Giang và toàn quốc.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-primary-100 text-primary-700 rounded-full text-lg font-medium">
              <FaAward className="w-6 h-6 mr-2" />
              Thương hiệu uy tín 10+ năm
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-10 h-10 text-primary-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 font-display mb-6">
                Câu chuyện của chúng tôi
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Kit Boong được thành lập vào năm 2013 tại Hà Giang bởi Lê Đình Trí và Vũ Ngọc Tú, 
                  với mục tiêu mang đến những sản phẩm chất lượng cao cho người dùng Việt Nam. 
                  Từ một công ty nhỏ với chỉ 5 nhân viên, chúng tôi đã phát triển thành một thương hiệu 
                  được tin tưởng bởi hàng nghìn khách hàng.
                </p>
                <p>
                  Với phương châm "Chất lượng là sự sống còn", chúng tôi không ngừng cải tiến 
                  và phát triển sản phẩm, đáp ứng mọi nhu cầu của khách hàng từ cơ bản đến cao cấp.
                </p>
                <p>
                  Ngày nay, Kit Boong tự hào là một trong những thương hiệu hàng đầu trong lĩnh vực 
                  sản xuất và phân phối sản phẩm công nghệ tại Hà Giang và toàn quốc.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop"
                alt="Kit Boong Story"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 animate-bounce-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-display mb-4">
              Giá trị cốt lõi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những giá trị định hình nên văn hóa và con người Kit Boong
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-50 to.secondary-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-display">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Company Info */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 font-display mb-6">
                Thông tin công ty
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Địa chỉ:</h4>
                  <p className="text-gray-600">Hà Giang, Việt Nam</p>
                </div>
                <div>
                  <h4 className="font-semibold text.gray-900 mb-2">Năm thành lập:</h4>
                  <p className="text-gray-600">2013</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Người sáng lập:</h4>
                  <p className="text-gray-600">Lê Đình Trí & Vũ Ngọc Tú</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Lĩnh vực:</h4>
                  <p className="text-gray-600">Công nghệ & Thương mại điện tử</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-display mb-4">
              Đội ngũ của chúng tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những con người tài năng và tâm huyết đang xây dựng tương lai của Kit Boong
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-display">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white font-display mb-6">
            Sẵn sàng trải nghiệm Kit Boong?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Khám phá bộ sưu tập sản phẩm đa dạng và chất lượng cao của chúng tôi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify.center">
            <Link
              to="/products"
              className="btn-secondary text-lg px-8 py-4"
            >
              Xem sản phẩm
            </Link>
            <Link
              to="/contact"
              className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
            >
              Liên hệ ngay
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
