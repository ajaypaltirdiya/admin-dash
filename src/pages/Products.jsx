import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllProducts,
  addNewProduct,
  deleteExistingProduct,
  updateExistingProduct,
} from '../features/products/productSlice';
import { useEffect, useState } from 'react';
import ProductTable from '../components/Products/ProductTable';
import Loader from '../components/common/Loader';

const Products = () => {
  const dispatch = useDispatch();
  const { items: products, loading, error, limit, skip, total } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const offset = (currentPage - 1) * limit;
    dispatch(fetchAllProducts({ limit, skip: offset }));
  }, [dispatch, currentPage, limit]);

  const handleAddProduct = (product) => {
    dispatch(addNewProduct(product));
  };

  const handleEditProduct = (updatedProduct) => {
    dispatch(updateExistingProduct(updatedProduct));
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteExistingProduct(id));
  };

  return (
    <div className='mb-5'>
      {loading && <Loader/>}
      {error && <p>{error}</p>}
      <ProductTable
        productsData={products}
        onAddProduct={handleAddProduct}
        onDeleteProduct={handleDeleteProduct}
        onEditProduct={handleEditProduct}
      />

      <div className='text-end mt-2 me-2'>
        <button className='btn btn-secondary me-1 btn-sm' onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <button className='btn  btn-secondary btn-sm' onClick={() => setCurrentPage(currentPage + 1)} disabled={skip + limit >= total}>Next</button>
      </div>
    </div>
  );
};

export default Products;
