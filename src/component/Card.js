import React from "react";
import Counter from "./Counter";
import ImgGallery from "./ImgGallery";
import Cart from "./Cart";
import Favourite from "./Favourite";
import { useGlobalContext } from "../Context";
const Card = ({ product, handleIncrease, handleReduce, toCartButton}) => {
  const {selectMeal} = useGlobalContext()
  return (
    <div className="card" onDoubleClick={()=>toCartButton(product.id)}>
      <Favourite product={product}/>
      <img src={product.image} className="card-img-top" alt="..." onClick={() => selectMeal(product.id)} />
      <div className="card-body">
        <h2 className="card-title">{product.title.split(' ').slice(0, 3).join(' ')}</h2>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex-column">
            <p className="price">Total Price</p>
            <p className="price-tag">&#8358;{product.price}</p>
          </div>
          <Counter
            product={product}
            handleIncrease={handleIncrease}
            handleReduce={handleReduce}
          />
        </div>
        <div>
          <ImgGallery />
        </div>
        <div>
          <Cart product={product} toCartButton={toCartButton}/>
        </div>
      </div>
    </div>
  );
};

export default Card;
