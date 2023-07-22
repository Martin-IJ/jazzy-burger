import { useState, useEffect } from "react";
import data from "./ProductStore";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import ViewMore from "./ViewMore";
import LoadingPage from "./LoadingPage";
import Signup from "./Signup";
import Login from "./Login";
import CheckOut from "./CheckOut";
import Update from "./Update";
import useAxiosFetch from "./hooks/useAxiosFetch";

function App() {
  const {data,isLoading,fetchError} = useAxiosFetch(
    "https://eggys.onrender.com/jazzyburger/all", 
  // "http://127.0.0.1:9000/api/product/",
  )
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setProducts(
      data.map((product) => {
        product.id = product._id;
        product.count = 1;
        delete product._id;
        return product;
      })
    );
  }, [data]);

  const handleIncrease = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.count++;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const handleReduce = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id && product.count > 1) {
        product.count--;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const toCartButton = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.cart = !product.cart;
      }
      return product;
    });
    setProducts(newProducts);
  };

  useEffect(() => {
    const toCart = () => {
      setCart(products.filter((product) => product.cart && product));
    };
    toCart();
  }, [products]);

  useEffect(()=>{
    setProducts(data)
  },[data])

  return (
    <div className="App ">
      {isLoading && <LoadingPage />}
      {!isLoading && (
        <div>
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    products={products}
                    handleIncrease={handleIncrease}
                    handleReduce={handleReduce}
                    toCartButton={toCartButton}
                    cart={cart}
                  />
                }
              />
              <Route
                path="/more"
                element={
                  <ViewMore
                    products={products}
                    handleIncrease={handleIncrease}
                    handleReduce={handleReduce}
                    toCartButton={toCartButton}
                    cart={cart}
                  />
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/checkout"
                element={
                  <CheckOut
                    cart={cart}
                    toCartButton={toCartButton}
                    handleIncrease={handleIncrease}
                    handleReduce={handleReduce}
                  />
                }
              />
              <Route
                path="/update"
                element={<Update cart={cart} toCartButton={toCartButton} />}
              />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
