import React from 'react';
import {BsPlusLg} from "react-icons/bs"
import {FaMinus} from "react-icons/fa"


function OneProduct() {
    const stil={margin:2+"em", borderStyle:"dotted"};
  return <div className='card' style={stil}>
      <img className='card-img-top ' src="https:/picsum.photos/200" alt="Neka slika" />
      <div className="card-body">
          <h3 className="card-title">Product name</h3>
          <p className="card-text">Product description</p>
          <BsPlusLg className="btn">+</BsPlusLg>
          <FaMinus className="btn">-</FaMinus>
      </div>
  </div>;
}

export default OneProduct;
