import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Замените на ваш URL сервера
  headers: {
    'Content-Type': 'application/json',
  },
});

// Пример функции для получения всех товаров
export const fetchProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

// Пример функции для получения товара по ID
export const fetchProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

// Пример функции для добавления товара в корзину
export const addToCart = async (productId, quantity) => {
  const response = await api.post('/cart', { productId, quantity });
  return response.data;
};

// Пример функции для получения корзины
export const fetchCart = async () => {
  const response = await api.get('/cart');
  return response.data;
};

// Пример функции для авторизации пользователя
export const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

// Пример функции для регистрации пользователя
export const register = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

// Пример функции для восстановления пароля
export const resetPassword = async (email) => {
  const response = await api.post('/auth/reset-password', { email });
  return response.data;
};