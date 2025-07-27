// import { useSelector } from "react-redux";
// import  FoodItem  from "./FoodItem";
// import CartItem from "./CartItem";


// const Cart = () => {

//     const cartItems = useSelector(store => store.cart.items)


//   return (
//     <>
//       <h1 className="font-bold ">cart page - {cartItems.length}</h1>
//         {cartItems.map(item=> <CartItem key={item.id} {...item} item={item}/> )}
//     </>
//   );
// };

// export default Cart;

// components/Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + ((item.price || item.defaultPrice || 0) / 100) * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center text-xl text-gray-500 mt-10">🛒 Your cart is empty.</div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-8 bg-[#fdf6ed] p-6 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-[#898ac4]">Your Cart</h1>

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="text-right mt-4 text-lg font-semibold text-[#898ac4]">
        Total: ₹{totalPrice.toFixed(2)}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
