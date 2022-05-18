import "./Productlist.css";
import React, { useState } from "react";

function ProductList(props) {
  const [shipping, setShipping] = useState([]);
  const deleteItems = (id) => {
    const attributes = { id };
    fetch("http://localhost:3001/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(attributes),
    })
      .then(() => {
        console.log(`New Product delete`);
        window.location.reload();
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const shipItems = (product) => {
    // e.preventDefault();
    let { name, description, location, quantity, product_id } = product;
    quantity = quantity - 1;
    const id = product_id;
    const attributes = { name, description, location, quantity, id };
    console.log(name);
    console.log(description);
    console.log(location);
    console.log(quantity);
    console.log(product_id);
    fetch("http://localhost:3001/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(attributes),
    })
      .then(() => {
        setShipping([...shipping,`${name}`]);
  
        console.log(shipping);
      })
      .then(() => {
        // window.location.reload();
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Productlist">
      <div className="itemRows">
        <p className="itemRowsList">product_id</p>
        <p className="itemRowsList">name</p>
        <p className="itemRowsList">description</p>
        <p className="itemRowsList">location</p>
        <p className="itemRowsList">quantity</p>
      </div>
      {props.data.map((product) => {
        return (
          <div key={product.product_id} className="product">
            <p>{product.product_id}</p>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.location}</p>
            <p>{product.quantity}</p>
            <button onClick={() => deleteItems(product.product_id)}>
              {" "}
              Delete item
            </button>
            <button onClick={() => shipItems(product)}>Add to Shipments</button>
          </div>
        );
      })}
      <h1>Shipments</h1>
      {/* {shipping.map((product) => {
        return (
          <div key={product.name}  className="product">
 
          <p>{product.name}</p>

        </div>
        );
      })} */}
      {shipping}
    </div>
  );
}

export default ProductList;
