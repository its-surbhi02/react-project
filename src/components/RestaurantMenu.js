import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer.js";
import useRestaurant from "../utils/useRestaurant.js";
import { addItem } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();

  // const [res, setRes] = useState(null);
  const res = useRestaurant(id);

  const restaurantInfoCard = res?.cards?.find((c) => c?.card?.card?.info?.name);

  const info = restaurantInfoCard?.card?.card?.info;

  const {
    name,
    cloudinaryImageId,
    cuisines,
    locality,
    areaName,
    costForTwoMessage,
    avgRating,
  } = info || {};

  // Extract menu items
  const groupedCards = res?.cards?.find((c) =>
    Array.isArray(c?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  );

  const menuCards =  groupedCards?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const menuItems = menuCards
    .map((card) => card.card?.card)
    .filter((card) => card?.itemCards)
    .flatMap((card) => card.itemCards.map((item) => item.card.info));

    const dispatch = useDispatch();

   const addFoodItem = (item) => {
  // Convert imageId to cloudinaryImageId to match FoodItem props
  const updatedItem = {
    ...item,
    cloudinaryImageId: item.imageId,
  };
  dispatch(addItem(updatedItem));
};


  return !res ? (
    <Shimmer />
  ) : (

    <div className="max-w-5xl mx-auto p-6 bg-[#fff2e0] rounded-xl shadow-md my-2">

  {/* Restaurant Banner */}
  <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
    <img
      src={
        cloudinaryImageId
          ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/${cloudinaryImageId}`
          : ""
      }
      alt={name}
      className="w-full md:w-64 h-48 object-cover rounded-lg"
    />
    <div className="text-center md:text-left">
      <h1 className="text-3xl font-bold text-[#898ac4]">{name}</h1>
      <p className="text-[#898ac4] text-sm mt-2">{cuisines?.join(", ")}</p>
      <div className="flex gap-4 text-[#898ac4] mt-2 text-sm font-medium">
        <span>⭐ {avgRating}</span>
        <span>{costForTwoMessage}</span>
      </div>
      <p className="text-sm text-gray-600 mt-1">{locality || areaName}</p>
    </div>
  </div>

  {/* Menu Heading */}
  <h2 className="text-2xl font-semibold text-[#898ac4] mb-4 border-b pb-2">
    Menu
  </h2>

  {/* Menu Items */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {menuItems.map((item,  index) => (
      <div
        className="flex flex-col sm:flex-row justify-between items-start gap-4 bg-white rounded-lg p-4 shadow"
        key={`${item.id}-${index}`}
      >
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#898ac4]">{item.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{item.description}</p>
          <p className="text-sm text-[#898ac4] mt-2">
            ₹{item.price / 100 || item.defaultPrice / 100}
          </p>
        </div>
        {item.imageId && (
          <img
            className="w-24 h-24 object-cover rounded-md"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/${item.imageId}`}
            alt={item.name}
          />
        )}
        <button className="p-2 bg-green-500" onClick={()=> addFoodItem(item)}>Add</button>
      </div>
    ))}
  </div>
</div>

  );
};

export default RestaurantMenu;
