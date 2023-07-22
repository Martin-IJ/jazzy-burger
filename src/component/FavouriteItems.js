import React from "react";
import "../styles/FavouriteItems.css";
import { useGlobalContext } from "../Context";

const FavouriteItems = () => {
  const { favourites, removeFromFavourites } = useGlobalContext();
  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5 className="favourite-name">Favorite Items</h5>
        <div className="favorites-container">
          {favourites.map((item) => {
            const { id, image } = item;
            return (
              <div key={id} className="favorite-item">
                <img
                  src={image}
                  alt="image"
                  className="favorites-img img"
                />
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavourites(id)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FavouriteItems;
