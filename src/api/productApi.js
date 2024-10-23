import axios from 'axios';

export const fetchProducts = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
  return response.data;
};

export const addProduct = async (newProduct) => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/products/add`, newProduct);
  return response.data;
};

export const updateProduct = async (updatedProduct) => {
  const response = await axios.put(`${import.meta.env.VITE_API_URL}/products/${updatedProduct.id}`, updatedProduct);
  return response.data;
};

export const deleteProduct = async (productId) => {
  const response = await axios.delete(`${import.meta.env.VITE_API_URL}/products/${productId}`);
  return response.data;
};