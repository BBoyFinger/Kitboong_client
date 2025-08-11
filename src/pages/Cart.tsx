import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaArrowLeft, FaShoppingCart, FaCreditCard } from 'react-icons/fa';

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
  stock: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const mockCartItems: CartItem[] = [
      { id: 1, name: 'Kit Boong Premium', price: 299000, originalPrice: 399000, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop', quantity: 2, stock: 15 },
      { id: 2, name: 'Kit Boong Deluxe', price: 199000, originalPrice: 249000, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop', quantity: 1, stock: 20 }
    ];
    setCartItems(mockCartItems);
  }, []);

  const formatPrice = (price: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((prev) => prev.map((item) => (item.id === itemId ? { ...item, quantity: Math.min(newQuantity, item.stock) } : item)));
  };

  const removeItem = (itemId: number) => setCartItems((prev) => prev.filter((item) => item.id !== itemId));

  const calculateSubtotal = () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const calculateDiscount = () => cartItems.reduce((total, item) => total + ((item.originalPrice ?? item.price) - item.price) * item.quantity, 0);

  const calculateTotal = () => calculateSubtotal() + 30000;

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      console.log('Proceeding to checkout with items:', cartItems);
      await new Promise((r) => setTimeout(r, 1000));
    } finally {
      setIsLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Giỏ hàng trống</h2>
          <p className="text-gray-600 mb-8">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
          <Link to="/products" className="btn-primary inline-flex items-center space-x-2">
            <FaArrowLeft className="w-4 h-4" />
            <span>Tiếp tục mua sắm</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="container-custom py-8">
          <div className="flex items-center space-x-4">
            <Link to="/products" className="text-primary-600 hover:text-primary-700 transition-colors">
              <FaArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 font-display">Giỏ hàng</h1>
            <span className="text-gray-500">({cartItems.length} sản phẩm)</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Sản phẩm trong giỏ hàng</h2>

              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 truncate">{item.name}</h3>
                      <div className="flex items-center space-x-3 mt-2">
                        <span className="text-lg font-bold text-primary-600">{formatPrice(item.price)}</span>
                        {item.originalPrice && <span className="text-gray-400 line-through">{formatPrice(item.originalPrice)}</span>}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1} className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:border-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">-</button>
                      <span className="w-12 text-center font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} disabled={item.quantity >= item.stock} className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:border-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">+</button>
                    </div>

                    <div className="text-right min-w-0">
                      <div className="text-lg font-bold text-gray-900">{formatPrice(item.price * item.quantity)}</div>
                      {item.originalPrice && <div className="text-sm text-gray-500">Tiết kiệm: {formatPrice((item.originalPrice - item.price) * item.quantity)}</div>}
                    </div>

                    <button onClick={() => removeItem(item.id)} className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link to="/products" className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors">
                  <FaArrowLeft className="w-4 h-4" />
                  <span>Tiếp tục mua sắm</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Tóm tắt đơn hàng</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600"><span>Tạm tính:</span><span>{formatPrice(calculateSubtotal())}</span></div>
                {calculateDiscount() > 0 && <div className="flex justify-between text-green-600"><span>Tiết kiệm:</span><span>-{formatPrice(calculateDiscount())}</span></div>}
                <div className="flex justify-between text-gray-600"><span>Phí vận chuyển:</span><span>{formatPrice(30000)}</span></div>
                <div className="flex justify-between text-lg font-bold text-gray-900 pt-4 border-t border-gray-200"><span>Tổng cộng:</span><span>{formatPrice(calculateTotal())}</span></div>
              </div>

              <button onClick={handleCheckout} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6 flex items-center justify-center space-x-2">
                {isLoading ? <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div><span>Đang xử lý...</span></> : <><FaCreditCard className="w-5 h-5" /><span>Tiến hành thanh toán</span></>}
              </button>

              <div className="mt-6 text-sm text-gray-500 space-y-2">
                <div className="flex items-center space-x-2"><FaShoppingCart className="w-4 h-4 text-green-500" /><span>Giao hàng miễn phí cho đơn từ 500k</span></div>
                <div className="flex items-center space-x-2"><FaCreditCard className="w-4 h-4 text-blue-500" /><span>Thanh toán an toàn</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
