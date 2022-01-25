import React from 'react';
import {BsPlusLg} from "react-icons/bs"
import {FaMinus} from "react-icons/fa"

// function onAdd(title){
//     console.log("Dodato"+title);
// }

function OneProduct({product,onAdd}) {
    const stil={margin:2+"em", borderStyle:"dotted"};

    console.log({product});
  return <div className='card' style={stil}>
      <img className='card-img-top ' src="https:/picsum.photos/200" alt="Neka slika" />
      <div className="card-body">
          <h3 className="card-title">{product.title}
          </h3>
          <p className="card-text">{product.description}</p>
          {/* <BsPlusLg className="btn" onClick={()=>onAdd(product.title)}>+</BsPlusLg> */}
          <BsPlusLg className="btn" onClick={()=>onAdd(product.title)}>+</BsPlusLg>
          <FaMinus className="btn">-</FaMinus>
      </div>
  </div>;
}

export default OneProduct;
