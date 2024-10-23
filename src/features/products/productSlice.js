// productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';

export const fetchAllProducts = createAsyncThunk('products/fetchAll',async ({ limit, skip }) => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/products?limit=${limit}&skip=${skip}`);
    return response.data;
  }
);

export const addNewProduct = createAsyncThunk('products/addNew',async (newProduct) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/products/add`, newProduct);
    return response.data;
  }
);

export const updateExistingProduct = createAsyncThunk(
  'products/update',
  async (updatedProduct) => {
    console.log('updatedProduct....',updatedProduct)
    const response = await axios.patch(`${import.meta.env.VITE_API_URL}/products/${Number(updatedProduct.id)}`, updatedProduct);
    return response.data;
  }
);

export const deleteExistingProduct = createAsyncThunk('products/delete',async (productId) => {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/products/${productId}`);
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
    limit: 10,
    skip: 0,
    total: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.items = action.payload.products.map(product => ({
          id: product.id,
          title: product.title,
          category: product.category,
          brand: product.brand,
          rating: product.rating,
          price: product.price,
        }));
        state.limit = action.payload.limit;
        state.skip = action.payload.skip;
        state.total = action.payload.total;
        state.loading = false;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: 'The product has been added successfully.',
            timer: 2000,
            showConfirmButton: false
        });
      })
      .addCase(updateExistingProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(product => product.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: 'The product has been updated successfully.',
            timer: 2000,
            showConfirmButton: false
        });
      })
      .addCase(deleteExistingProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(product => product.id !== action.meta.arg);
        Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'The product has been deleted successfully.',
            timer: 2000,
            showConfirmButton: false
        });
      });
  },
});

export default productSlice.reducer;
