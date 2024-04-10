import React from "react";

import "./ProductTable.scss";
import { useSearchProductsQuery } from "../../../features/product/productApi";
import TableBody from "../TableBody/TableBody";

const ProductTable = () => {
  const { data, isLoading } = useSearchProductsQuery();

  return (
    <div className="productTable">
      {isLoading && "Loading..."}
      {!isLoading && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* // table body  */}
          <tbody>
            {
              data.map(row=><TableBody data={row} key={row._id}/>)
            }
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductTable;
