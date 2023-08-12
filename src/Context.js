import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const getFavouriteItemsFromLocalStorage = () => {
  let favouriteItem = localStorage.getItem("favouriteItem");

  if (favouriteItem) {
    favouriteItem = JSON.parse(localStorage.getItem("favouriteItem"));
  } else {
    favouriteItem = [];
  }

  return favouriteItem;
};

const AppProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(
    getFavouriteItemsFromLocalStorage()
  );
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setselectedMeal] = useState(null);
  const [meals, setMeals] = useState([]);

  const selectMeal = (id, favouriteMeal) => {
    let meal;
    if (favouriteMeal) {
      meal = favourites.find((meal) => meal.id === id);
    } else {
      meal = meals.find((meal) => meal.id === id);
    }
    setselectedMeal(meal);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addToFavourites = (id, image) => {
    const existingFavourite = favourites.find((meal) => meal.id === id);

    if (existingFavourite) {
      const updatedFavourites = favourites.filter((meal) => meal.id !== id);
      setFavourites(updatedFavourites);
      localStorage.setItem("favouriteItem", JSON.stringify(updatedFavourites));
    } else {
      const updatedFavourites = [...favourites, { id, image }];
      setFavourites(updatedFavourites);
      localStorage.setItem("favouriteItem", JSON.stringify(updatedFavourites));
    }
  };

  const removeFromFavourites = (id) => {
    const updateFavourites = favourites.filter((meal) => meal.id !== id);
    setFavourites(updateFavourites);
    localStorage.setItem("favouriteItem", JSON.stringify(updateFavourites));
  };
  return (
    <AppContext.Provider
      value={{
        addToFavourites,
        removeFromFavourites,
        favourites,
        selectMeal,
        closeModal,
        showModal,
        selectedMeal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
