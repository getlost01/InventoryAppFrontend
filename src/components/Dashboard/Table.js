import React from 'react';

const Table = ({ products, handleEdit, handleDelete }) => {
  products.forEach((product, i) => {
    product.id = i + 1;
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Product</th>
            <th>Company</th>
            <th>Image Link</th>
            <th>Price</th>
            <th>Released</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, i) => (
              <tr key={product.id}>
                <td>{i + 1}</td>
                <td>{product.title}</td>
                <td>{product.createdBy}</td>
                <td>{product.image}</td>
                <td>{formatter.format(product.price)}</td>
                <td>{product.createdAt} </td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No products</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
