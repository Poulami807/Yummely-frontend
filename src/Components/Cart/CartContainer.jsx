import React, { useState, useEffect } from "react";

// Icons
import {
  IoMdArrowDropdown,
  IoMdArrowDropright,
  IoMdArrowDropup,
} from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import FoodItem from "./FoodItem";
import { useNavigate } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";
import { getCart } from "../../Redux/Reducer/Cart/cart.action";

function CartSM({ toggle }) {
  const navigate= useNavigate();
  const reduxState = useSelector((globalStore) => globalStore.cart.cart);

  const continueToCheckout = () => {
   navigate("/checkout/orders");
  };

  return (
    <>
      <div className="md:hidden flex items-center justify-between">
        <div className="flex flex-col items-start">
          <small className="flex items-center gap-1" onClick={toggle}>
          {reduxState.length} <IoMdArrowDropup />{" "}
          </small>
          <h4>
            ₹{reduxState.reduce((acc, curVal) => acc + curVal.totalPrice, 0)}{" "}
            <sub>(plus tax)</sub>
          </h4>
        </div>
        <button
          onClick={continueToCheckout}
          className="flex items-center gap-1 bg-main-300 px-3 py-1 text-white rounded-lg"
        >
          Continue <IoMdArrowDropright />
        </button>
      </div>
    </>
  );
}

function CartLg({ toggle }) {
  const navigate= useNavigate();
  const reduxState = useSelector((globalStore) => globalStore.cart.cart);

  const continueToCheckout = () => {
   navigate("/checkout/orders");
  }
  return (
    <>
      <div className="hidden md:flex items-center justify-between container px-20 mx-auto">
        <div className="flex gap-2 text-xl items-start">
          <span
            className="border bg-white border-gray-300 p-1 rounded"
            onClick={toggle}
          >
            <IoMdArrowDropup />
          </span>
          <h4>Your Orders ({reduxState.length})</h4>
        </div>
        <div className="flex items-center gap-2">
          <h4 className="text-xl">
            Subtotal: ₹{reduxState.reduce((acc, curVal) => acc + curVal.totalPrice, 0)}{" "}
            <sub>(plus tax)</sub>
          </h4>
          <button
            onClick={continueToCheckout}
            className="flex items-center gap-1 bg-main-300 px-3 py-1 text-white rounded-lg"
          >
            Continue <IoMdArrowDropright />
          </button>
        </div>
      </div>
    </>
  );
}

function CartContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartData, setCartData] = useState();
  // const [foods, setFoods] = useState([
  //   {
  //       image:"https://b.zmtcdn.com/data/dish_photos/9f9/7286523dde8c65d5e9c126b15bfe29f9.jpg",
  //       name: "Chilli Paneer Gravy",
  //       price: "157.50",
  //       quantity: 4
  //   },
  //   {
  //       image:"https://b.zmtcdn.com/data/dish_photos/9f9/7286523dde8c65d5e9c126b15bfe29f9.jpg",
  //       name: "Chilli Paneer Gravy",
  //       price: "157.50",
  //       quantity: 4
  //   }
  // ]);

  const [foods, setFoods] = useState([])

  const reduxState = useSelector((globalStore) => globalStore.cart.cart);

  const toggleCart = () => setIsOpen((prev) => !prev);
  const closeCart = () => setIsOpen(false);

  return (
    <>
        {reduxState.length && (
        <>
          {isOpen && (
            <div className="fixed w-full overflow-y-scroll h-48 bg-white z-10 p-2 bottom-16 px-3">
              <div className="flex items-center justify-between md:px-20">
                <h3 className="text-xl font-semibold">Your Orders</h3>
                <IoCloseSharp onClick={closeCart} />
              </div>
              <hr className="my-2" />
              <div className="flex flex-col gap-2 md:px-20">
                {reduxState.map((food) => (
                  <FoodItem {...food} key={food._id} />
                ))}
              </div>
            </div>
          )}
          <div className="fixed w-full bg-white z-10 py-4 px-3 bottom-0">
            <CartSM toggle={toggleCart} />
            <CartLg toggle={toggleCart} />
          </div>
        </>
        )}
    </>
  );
}

export default CartContainer;