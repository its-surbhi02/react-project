// // components/CartItem.js
// import React from "react";

// const CartItem = ({ item }) => {
//   const { name, description, price, defaultPrice, imageId } = item;

//   const imageUrl = imageId
//     ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/${imageId}`
//     : null;

//   return (
//     <div className="bg-white p-4 rounded shadow my-2 flex justify-between items-center">
//       <div>
//         <h2 className="text-lg font-semibold text-[#898ac4]">{name}</h2>
//         <p className="text-sm text-gray-500">{description || "No description available"}</p>
//         <p className="text-sm text-[#898ac4]">₹{(price || defaultPrice) / 100}</p>
//       </div>
//       {imageUrl && (
//         <img
//           className="w-24 h-24 object-cover rounded"
//           src={imageUrl}
//           alt={name}
//         />
//       )}
//     </div>
//   );
// };

// export default CartItem;

// components/CartItem.js
import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem, decreaseItem } from "../utils/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, price, defaultPrice, imageId, quantity = 1 } = item;

  const imageUrl = imageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/${imageId}`
    : null;

  const itemPrice = (price || defaultPrice || 0) / 100;

  return (
    <div className="bg-white p-4 rounded shadow my-2 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="w-20 h-20 object-cover rounded"
          />
        )}
        <div>
          <h2 className="text-lg font-semibold text-[#898ac4]">{name}</h2>
          <p className="text-sm text-gray-600">₹{itemPrice}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => dispatch(decreaseItem(id))}
          className="bg-[#a2aadb] text-white px-2 rounded"
        >
          −
        </button>
        <span className="px-2">{quantity}</span>
        <button
          onClick={() => dispatch(addItem(item))}
          className="bg-[#898ac4] text-white px-2 rounded"
        >
          +
        </button>
        <button
          onClick={() => dispatch(removeItem(id))}
          className="ml-2 bg-red-500 text-white px-2 rounded"
        >
          🗑
        </button>
      </div>
    </div>
  );
};

export default CartItem;
