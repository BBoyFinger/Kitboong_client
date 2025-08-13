import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      HOME: 'Home',
      PRODUCTS: 'Products',
      'CUSTOM BONGS': 'Custom Bongs',
      'MASON JAR BONGS': 'Mason Jar Bongs',
      'BOWLS AND BANGERS': 'Bowls and Bangers',
      LOGIN: 'Log in',
      CART: 'Cart',
      MENU: 'Menu',
      SEARCH: 'Search products...'
    }
  },
  vi: {
    translation: {
      HOME: 'Trang chủ',
      PRODUCTS: 'Sản phẩm',
      'CUSTOM BONGS': 'Custom Bongs',
      'MASON JAR BONGS': 'Mason Jar Bongs',
      'BOWLS AND BANGERS': 'Bowls và Bangers',
      LOGIN: 'Đăng nhập',
      CART: 'Giỏ hàng',
      MENU: 'Menu',
      SEARCH: 'Tìm kiếm sản phẩm...'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
