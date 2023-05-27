import React, { useState } from "react";

function FormData({ sendData, setSendData, setDisplayData, setId, Id }) {
  const [details, setDetails] = useState({
    name: "",
    description: "",
    rate: "",
    discount: "",
    quantity: "",
    isFav: false
  });

  const handleChange = (event) => {
    // if (!event.target.value.checkvalidity()) {
      console.log(event.target.value.validationMessage);
    // } else {
      setDetails({ ...details, [event.target.name]: event.target.value });
    // }
  };

  const onSubmit = () => {
    setSendData((prev) => [...prev, details]);
    setDisplayData((prev) => [...prev, details]);
  };
  return (
    <>
      <div className="Form">
        <p>ADD PRODUCTS</p>
        {/* <form onSubmit={(e) => onSubmit}> */}
          <center>
            <ul type="none">
              <li>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Product Name"
                  value={details.name}
                  onChange={handleChange}
                />
              </li>
              <li>
                <label>Price</label>
                <input
                  type="number"
                  name="rate"
                  placeholder="Enter Product Price"
                  value={details.rate}
                  onChange={handleChange}
                />
              </li>
              <li>
                <label>Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Enter Product Quantity"
                  value={details.quantity}
                  onChange={handleChange}
                />
              </li>
              <li>
                <label>Discount</label>
                <input
                  type="number"
                  name="discount"
                  placeholder="Enter Product Discount"
                  value={details.discount}
                  onChange={handleChange}
                />
              </li>
              <li>
                <label>Description</label>
                <textarea
                  id="description"
                  type="text"
                  name="description"
                  value={details.description}
                  onChange={handleChange}
                ></textarea>
              </li>
            </ul>
          </center>
        {/* </form> */}
        <button onClick={onSubmit}>ADD</button>
      </div>
    </>
  );
}

export default FormData;
