import React from "react";
import "../styles/favourite.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useGlobalContext } from "../Context";

const Favourite = ({ product }) => {
  const { addToFavourites } = useGlobalContext();

  return (
    <div>
      <div
        className="heart-bck"
        onClick={() => addToFavourites(product.id, product.image)}
      >
        <FaRegHeart className="heart" />
      </div>
    </div>
  );
};

export default Favourite;
