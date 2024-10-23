import { useState } from 'react';
import DataTable from 'react-data-table-component';

const ProductTable = ({ productsData, onAddProduct, onEditProduct, onDeleteProduct }) => {
  const [filterText, setFilterText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formState, setFormState] = useState({ id: '', title: '', category: '', brand: '', rating: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormState({ title: '', category: '', brand: '', rating: '' });
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      onEditProduct(formState); 
    } else {
      onAddProduct(formState); 
    }
    handleCloseModal();
  };

  const handleDelete = (id) => {
    onDeleteProduct(id);
  };

  const handleEdit = (product) => {
    setFormState(product);
    setIsEditing(true);
    handleShowModal();
  };

  const filteredItems = productsData?.filter((item) =>
    item.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-between mb-2">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Filter by title"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <button className="btn primary-bg" onClick={handleShowModal}>
          Add Product
        </button>
      </div>

      <DataTable
        title="Product List"
        columns={[
          { name: 'ID', selector: (row) => row.id, sortable: true },
          { name: 'Title', selector: (row) => row.title, sortable: true },
          { name: 'Category', selector: (row) => row.category, sortable: true },
          { name: 'Brand', selector: (row) => row.brand, sortable: true },
          { name: 'Rating', selector: (row) => row.rating, sortable: true },
          {
            name: 'Actions',
            cell: (row) => (
              <>
                <button className="btn primary-bg btn-sm me-2" onClick={() => handleEdit(row)}>
                  Edit
                </button>
                <button className="btn btn-warning btn-sm" onClick={() => handleDelete(row.id)}>
                  Delete
                </button>
              </>
            ),
          },
        ]}
        data={filteredItems || []}
        // pagination
      />

      {/* Modal for add/edit */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{isEditing ? 'Edit Product' : 'Add Product'}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="product-title" className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="product-title"
                      value={formState.title}
                      onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="product-category" className="form-label">Category</label>
                    <input
                      type="text"
                      className="form-control"
                      id="product-category"
                      value={formState.category}
                      onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="product-brand" className="form-label">Brand</label>
                    <input
                      type="text"
                      className="form-control"
                      id="product-brand"
                      value={formState.brand}
                      onChange={(e) => setFormState({ ...formState, brand: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="product-rating" className="form-label">Rating</label>
                    <input
                      type="number"
                      className="form-control"
                      id="product-rating"
                      step="0.1"
                      value={formState.rating}
                      onChange={(e) => setFormState({ ...formState, rating: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" className="btn primary-bg">
                    {isEditing ? 'Update' : 'Add'} Product
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
