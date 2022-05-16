import React, { useState } from "react";
import "./CreateNew.css";

function Edit(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [quantity, setQuantity] = useState("");
  const [, updateState] = useState();

  const attributes = { name, description, location, quantity };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(attributes);
    fetch("http://localhost:3001/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(attributes),
    })
      .then(() => {
        console.log(`New Product added`);
        setName("")
        setDescription("")
        setLocation("")
        setQuantity("")
        window.location.reload();
      
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="creatNew">
      new product
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="stack">
            <h3>Name of New Product</h3>
            <input onChange={(e) => setName(e.target.value)} value={name} />
          </div>
          <div className="stack">
            <h3>description of New Product</h3>
            <input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
        </div>
        <div className="inputs">
          <div className="stack">
            <h3>location of New Product</h3>
            <input
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </div>
          <div className="stack">
            <h3>Quantity of New Product</h3>
            <input
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            />
          </div>
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Edit;
