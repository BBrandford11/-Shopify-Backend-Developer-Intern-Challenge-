import "./Productlist.css";

function ProductList(props) {
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
  console.log(props.data);
  return (
    <div className="Productlist">
      productssss
      {props.data.map((product) => {
        return (
          <div key={product.product_id} className="product">
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.location}</p>
            <p>{product.quantity}</p>
            <button onClick={() => deleteItems(product.product_id)}>
              {" "}
              Delete item
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
