import React, { useState } from "react";
import { Icon } from '@iconify/react';

function Display({ sendData, setSendData, displayData, setDisplayData }) {

  const[favlist,setfavlist] = useState(false);

  const sortProducts = (term) => {
    console.log(term);
    if (term === "name") {
      // sendData.sort((a, b) => (a.name > b.name ? 1 : -1));
      const myData = []
        .concat(displayData)
        .sort((a, b) => (a.name > b.name ? 1 : -1));
      // sendData.sort((p1,p2) => (p1.name <p2.name) ? 1 :(p1.name> p2.name)? -1 :0 );
      console.log(myData);
      setDisplayData(myData);
    } else if (term === "rate") {
      const myData = [].concat(displayData).sort((a, b) => a.rate - b.rate);
      console.log(myData);
      setDisplayData(myData);
    } else if (term === "quantity") {
      const myData = []
        .concat(displayData)
        .sort((a, b) => a.quantity - b.quantity);
      console.log(myData);
      setDisplayData(myData);
    }
  };

  const filterProducts = (range) => {
    console.log(range);
    if (range === "none") {
      setDisplayData(sendData);
    } else if (range === "5") {
      const myData = sendData.filter((item) => item.rate >= 50000 );
      console.log(myData);
      setDisplayData(myData);
    } else if (range === "4") {
      const myData = sendData.filter((item) => item.rate >= 40000 && item.rate < 50000);
      console.log(myData);
      setDisplayData(myData);
    } else if (range === "3") {
      const myData = sendData.filter((item) => item.rate >= 30000 && item.rate < 40000);
      console.log(myData);
      setDisplayData(myData);
    } else if (range === "2") {
      const myData = sendData.filter((item) => item.rate >= 20000 && item.rate < 30000);
      console.log(myData);
      setDisplayData(myData);
    } else if (range === "1") {
      const myData = sendData.filter((item) => item.rate >= 10000 && item.rate < 20000);
      console.log(myData);
      setDisplayData(myData);

    } else if (range === "0") {
      const myData = sendData.filter((item) => item.rate <= 10000);
      console.log(myData);
      setDisplayData(myData);
    }
  };

  const handleFavouriteClick = (index) => {
    const fav = displayData.map((item) => ({ ...item }));
    fav[index].isFav = !fav[index].isFav;
    setDisplayData(fav); 
    console.log(fav);   
  }

  const displayFavorites = () => {
    const list = [...displayData]
    console.log(list);
    setfavlist(!favlist);
    if(favlist){
    const myData = displayData.filter((item) => item.isFav === true );
      console.log(myData);
      setDisplayData(myData);
    }
    else{
      setDisplayData(list);
    }
  }

  return (  
    <div className="Display">
      <p>VIEW PRODUCTS</p>
      <button id="favorites" onClick={displayFavorites}>FAVORITES</button>

      <div className="functionalities">
        <div>
          <p id="sorting">SORT</p>
          <input
            type="radio"
            id="name"
            name="sort"
            onChange={(e) => sortProducts("name")}
          />
          <label for="name">Name</label>
          <input
            type="radio"
            id="rating"
            name="sort"
            onChange={(e) => sortProducts("rate")}
          />
          <label for="rate">Rating</label>
          <input
            type="radio"
            id="Quantity"
            name="sort"
            onChange={(e) => sortProducts("quantity")}
          />
          <label for="quantity">Quantity</label>
          <div className="filters">
            <p id="sorting">FILTERS</p>
            <select
              name="filter"
              id="filter"
              onChange={(e) => filterProducts(e.target.value)}
            >
              <option value="none">No Filter</option>
              <option value="5">50000+</option>
              <option value="4">40000 - 50000</option>
              <option value="3">30000 - 40000</option>
              <option value="2">20000 - 10000</option>
              <option value="1">10000 - 20000</option>
              <option value="0"> less than 10000</option>
            </select>
          </div>
        </div>
      </div>
      {displayData.length && displayData
      .map((items,index) => {
        return (
          <div className="product1" key={items.id}>
            <div>
              <p id="name">{items.name}</p>
              <p id="description">{items.description}</p>
              <p id="rate">Rate:{items.rate}</p>
              <p id="discount">Discount: {items.discount}</p>
              <p id="quantity">Quantity: {items.quantity}</p>
              <button id="like" onClick={() => handleFavouriteClick(index)}>
            {items.isFav ? <Icon icon="mdi:heart" color= 'red' /> : <Icon icon="mdi:heart" color= 'white' />}
          </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Display;
