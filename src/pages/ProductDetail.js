import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaHeart, FaShare, FaTruck, FaShieldAlt, FaHeadset, FaGift } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Mock data - replace with API call
  useEffect(() => {
    const mockProduct = {
      id: parseInt(id),
      name: "Kit Boong Premium",
      price: 299000,
      originalPrice: 399000,
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop"
      ],
      rating: 4.8,
      reviews: 124,
      badge: "Bán chạy",
      category: "premium",
      description: "Kit Boong Premium với chất lượng cao cấp, thiết kế hiện đại và tính năng vượt trội. Sản phẩm được thiết kế để đáp ứng mọi nhu cầu của người dùng khó tính nhất.",
      features: [
        "Chất liệu cao cấp, bền bỉ",
        "Thiết kế hiện đại, thẩm mỹ",
        "Tính năng đa dạng",
        "Bảo hành chính hãng 12 tháng",
        "Giao hàng miễn phí toàn quốc"
      ],
      specifications: {
        "Kích thước": "15 x 10 x 5 cm",
        "Trọng lượng": "500g",
        "Chất liệu": "Nhựa ABS cao cấp",
        "Màu sắc": "Đen, Trắng, Xanh",
        "Xuất xứ": "Việt Nam"
      },
      stock: 15,
      sku: "KB-PRE-001"
    };

    const mockRelatedProducts = [
      {
        id: 2,
        name: "Kit Boong Deluxe",
        price: 199000,
        originalPrice: 249000,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 89,
        badge: "Giảm giá"
      },
      {
        id: 3,
        name: "Kit Boong Standard",
        price: 149000,
        originalPrice: 199000,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 67,
        badge: "Mới"
      },
      {
        id: 4,
        name: "Kit Boong Pro",
        price: 399000,
        originalPrice: 499000,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
        rating: 4.9,
        reviews: 156,
        badge: "Cao cấp"
      }
    ];

    setProduct(mockProduct);
    setRelatedProducts(mockRelatedProducts);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải thông tin sản phẩm...</p>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    console.log('Adding to cart:', { product, quantity });
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm">
        <div className="container-custom py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="text-gray-500 hover:text-primary-600">
                  Trang chủ
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li>
                <Link to="/products" className="text-gray-500 hover:text-primary-600">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li className="text-gray-900 font-medium">
                {product.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg shadow-md overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-primary-500 scale-105'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badge */}
            {product.badge && (
              <div className="inline-block">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-primary-500 rounded-full">
                  {product.badge}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 font-display">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating}/5 ({product.reviews} đánh giá)
              </span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-primary-600">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {discountPercentage > 0 && (
                  <span className="px-2 py-1 text-sm font-semibold text-white bg-red-500 rounded">
                    -{discountPercentage}%
                  </span>
                )}
              </div>
            </div>

            {/* Stock & SKU */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <span>Mã SP: {product.sku}</span>
              <span className={`${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {product.stock > 0 ? `Còn ${product.stock} sản phẩm` : 'Hết hàng'}
              </span>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">Số lượng:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    className="px-3 py-2 text-gray-600 hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                    className="w-16 text-center border-0 focus:ring-0 focus:outline-none"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= product.stock}
                    className="px-3 py-2 text-gray-600 hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <FaShoppingCart className="w-5 h-5" />
                  <span>Thêm vào giỏ hàng</span>
                </button>
                <button className="p-3 border border-gray-300 rounded-lg text-gray-600 hover:text-primary-600 hover:border-primary-600 transition-colors duration-300">
                  <FaHeart className="w-5 h-5" />
                </button>
                <button className="p-3 border border-gray-300 rounded-lg text-gray-600 hover:text-primary-600 hover:border-primary-600 transition-colors duration-300">
                  <FaShare className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <FaTruck className="w-5 h-5 text-primary-500" />
                <span>Giao hàng miễn phí</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <FaShieldAlt className="w-5 h-5 text-primary-500" />
                <span>Bảo hành 12 tháng</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <FaHeadset className="w-5 h-5 text-primary-500" />
                <span>Hỗ trợ 24/7</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <FaGift className="w-5 h-5 text-primary-500" />
                <span>Quà tặng kèm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {[
                { id: 'description', label: 'Mô tả' },
                { id: 'features', label: 'Tính năng' },
                { id: 'specifications', label: 'Thông số' },
                { id: 'reviews', label: 'Đánh giá' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    selectedTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {selectedTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            )}

            {selectedTab === 'features' && (
              <div className="grid md:grid-cols-2 gap-6">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {selectedTab === 'specifications' && (
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-700">{key}</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {selectedTab === 'reviews' && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">⭐</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Chưa có đánh giá nào
                </h3>
                <p className="text-gray-600">
                  Hãy là người đầu tiên đánh giá sản phẩm này!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 font-display mb-8">
            Sản phẩm liên quan
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 