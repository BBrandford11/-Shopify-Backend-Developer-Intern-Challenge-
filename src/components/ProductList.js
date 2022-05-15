import "./Productlist.css";

function ProductList(props) {
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
          </div>
          
        );
      })}
    </div>
  );
}

export default ProductList;
