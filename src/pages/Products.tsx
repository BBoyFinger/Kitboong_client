import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaSearch, FaFilter, FaTh, FaList } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';

const collectionMap: Record<string, string> = {
  'all': 'Tất cả sản phẩm',
  'custom-bongs': 'Custom Bongs',
  'mason-jar-bongs': 'Mason Jar Bongs',
  'bowls-bangers': 'Bowls and Bangers',
};

const Products: React.FC = () => {
  const location = useLocation();
  const collection = location.pathname.split('/')[2] || 'all';

  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(12);

  useEffect(() => {
    const mockProducts = [
      { id: 1, name: 'Kit Boong Premium', price: 299000, originalPrice: 399000, image: '/images/kitboong1/1.webp', rating: 4.8, reviews: 124, badge: 'Bán chạy', category: 'premium', description: 'Kit Boong Premium với chất lượng cao cấp, thiết kế hiện đại', collection: 'all' },
      { id: 2, name: 'Custom Bong A', price: 199000, originalPrice: 249000, image: '/images/kitboong1/2.webp', rating: 4.6, reviews: 89, badge: 'Giảm giá', category: 'deluxe', description: 'Custom Bong chất lượng', collection: 'custom-bongs' },
      { id: 3, name: 'Mason Jar Bong B', price: 149000, originalPrice: 199000, image: '/images/kitboong1/3.webp', rating: 4.5, reviews: 67, badge: 'Mới', category: 'standard', description: 'Mason Jar Bong tiện lợi', collection: 'mason-jar-bongs' },
      { id: 4, name: 'Bowl & Banger C', price: 399000, originalPrice: 499000, image: '/images/kitboong.jpg', rating: 4.9, reviews: 156, badge: 'Cao cấp', category: 'pro', description: 'Bowls and Bangers chất lượng', collection: 'bowls-bangers' },
      { id: 5, name: 'Kit Boong Mini', price: 99000, originalPrice: 129000, image: '/images/kitboong1/1.webp', rating: 4.3, reviews: 45, badge: 'Tiết kiệm', category: 'mini', description: 'Kit Boong Mini gọn nhẹ, tiện lợi', collection: 'all' },
      { id: 6, name: 'Kit Boong Max', price: 599000, originalPrice: 699000, image: '/images/kitboong1/2.webp', rating: 5.0, reviews: 89, badge: 'Cao cấp', category: 'max', description: 'Kit Boong Max với công nghệ tiên tiến nhất', collection: 'all' }
    ];
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  useEffect(() => {
    let filtered = products.filter((product: any) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesCollection = collection === 'all' || (product.collection && product.collection === collection);
      return matchesSearch && matchesCategory && matchesPrice && matchesCollection;
    });

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a: any, b: any) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a: any, b: any) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a: any, b: any) => b.rating - a.rating);
        break;
      case 'reviews':
        filtered.sort((a: any, b: any) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [products, searchTerm, selectedCategory, priceRange, sortBy, collection]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const categories = [
    { value: 'all', label: 'Tất cả' },
    { value: 'premium', label: 'Premium' },
    { value: 'deluxe', label: 'Deluxe' },
    { value: 'standard', label: 'Standard' },
    { value: 'pro', label: 'Pro' },
    { value: 'mini', label: 'Mini' },
    { value: 'max', label: 'Max' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Nổi bật' },
    { value: 'price-low', label: 'Giá thấp → cao' },
    { value: 'price-high', label: 'Giá cao → thấp' },
    { value: 'rating', label: 'Đánh giá cao nhất' },
    { value: 'reviews', label: 'Nhiều đánh giá nhất' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg.white shadow-sm">
        <div className="container-custom py-8">
          <h1 className="text-4xl font-bold text-gray-900 font-display mb-4">
            {collectionMap[collection] || 'Sản phẩm Kit Boong'}
          </h1>
          <p className="text-xl text-gray-600">Khám phá bộ sưu tập đa dạng với chất lượng cao cấp</p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <FaFilter className="w-5 h-5 mr-2 text-primary-500" />
                Bộ lọc
              </h3>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Tìm kiếm</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Tìm sản phẩm..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Danh mục</label>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>{category.label}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Khoảng giá</label>
                <div className="space-y-2">
                  <input type="range" min={0} max={1000000} step={10000} value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])} className="w-full" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{new Intl.NumberFormat('vi-VN').format(priceRange[0])}đ</span>
                    <span>{new Intl.NumberFormat('vi-VN').format(priceRange[1])}đ</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Sắp xếp</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div className="text-sm text-gray-600">Tìm thấy {filteredProducts.length} sản phẩm</div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>
                  <FaTh className="w-4 h-4" />
                </button>
                <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>
                  <FaList className="w-4 h-4" />
                </button>
              </div>
            </div>

            {currentProducts.length > 0 ? (
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                {currentProducts.map((product: any) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Không tìm thấy sản phẩm</h3>
                <p className="text-gray-600">Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                  <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">Trước</button>
                  {Array.from({ length: totalPages }, (_: any, i: number) => i + 1).map((page) => (
                    <button key={page} onClick={() => setCurrentPage(page)} className={`px-3 py-2 text-sm font-medium rounded-lg ${currentPage === page ? 'bg-primary-500 text-white' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'}`}>{page}</button>
                  ))}
                  <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">Sau</button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
